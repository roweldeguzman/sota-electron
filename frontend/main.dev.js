/* eslint-disable global-require, no-console, import/no-extraneous-dependencies */

import { app, BrowserWindow } from 'electron';
import { autoUpdater } from 'electron-updater';
import log from 'electron-log';
import MenuBuilder from './menu';

export default class AppUpdater {
  constructor() {
    log.transports.file.level = 'info';
    autoUpdater.logger = log;
    autoUpdater.checkForUpdatesAndNotify();
  }
}

let mainWindow = null;

if (process.env.NODE_ENV === 'production') {
  const sourceMapSupport = require('source-map-support');
  sourceMapSupport.install();
}

if (process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true') {
  require('electron-debug')();
}

const installExtensions = async () => {
  const installer = require('electron-devtools-installer');
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  const extensions = ['REACT_DEVELOPER_TOOLS', 'REDUX_DEVTOOLS'];

  return Promise.all(
    extensions.map(name => installer.default(installer[name], forceDownload))
  ).catch(console.log);
};


const dispatch = (data) => {
  mainWindow.webContents.send('message', data)
}

/**
 * Add event listeners...
 */

app.on('window-all-closed', () => {
  // Respect the OSX convention of having the application in memory even
  // after all windows have been closed
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('ready', async () => {
  if ( process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true') {
    await installExtensions();
  }

  mainWindow = new BrowserWindow({
    show: false,
    minWidth: 1024,
    minHheight: 728
  });

  mainWindow.loadURL(`file://${__dirname}/app.html`);

  // @TODO: Use 'ready-to-show' event
  //        https://github.com/electron/electron/blob/master/docs/api/browser-window.md#using-ready-to-show-event
  mainWindow.webContents.on('did-finish-load', () => {
    if (!mainWindow) {
      throw new Error('"mainWindow" is not defined');
    }
    if (process.env.START_MINIMIZED) {
      mainWindow.minimize();
    } else {
      mainWindow.maximize()
      mainWindow.show();
      mainWindow.focus();
    }
    autoUpdater.checkForUpdatesAndNotify()
    mainWindow.webContents.send('version', app.getVersion())
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  const menuBuilder = new MenuBuilder(mainWindow);
  menuBuilder.buildMenu();

  // Remove this if your app does not use auto updates
  // eslint-disable-next-line
  // new AppUpdater();

  autoUpdater.on('checking-for-update', () => {
    dispatch('Checking for update...')
  })
  
  autoUpdater.on('update-available', () => {
    dispatch('Update available.')
  })
  
  autoUpdater.on('update-not-available', () => {
    dispatch('Update not available.')
  })
  
  autoUpdater.on('error', (err) => {
    dispatch(`Error in auto-updater. ${err}`)
    
  })
  
  autoUpdater.on('download-progress', (progressObj) => {
      
    mainWindow.webContents.send('download-progress', progressObj.percent)
  
  })
  
  autoUpdater.on('update-downloaded', () => {
    // autoUpdater.quitAndInstall();
    dispatch('Update downloaded')
  })

});
