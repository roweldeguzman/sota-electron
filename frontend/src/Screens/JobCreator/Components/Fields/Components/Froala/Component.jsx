import * as React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import FroalaEditor from 'react-froala-wysiwyg';
import styles from './Component.css';

const config = {
  heightMin: 200,
  toolbarStickyOffset: 45,
  toolbarButtons: ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', 'insertTable', '|', 'emoticons', 'specialCharacters', 'insertHR', 'clearFormatting', '|', 'fullscreen', 'html', '|', 'undo', 'redo'],
  quickInsertButtons: ['ul', 'ol', 'hr', 'table']
}

export default class extends React.PureComponent {
  
  static propTypes = {
    onChangeEditor: PropTypes.func.isRequired
  }

  render() {

    const { onChangeEditor } = this.props;
    
    return (            
      <div className={classnames(styles.wrapper, 'contentEditor')}>

        <FroalaEditor
          tag='textarea'
          model={null}
          onModelChange={onChangeEditor}
          config={config}
        />

      </div>

    );
  }
}
