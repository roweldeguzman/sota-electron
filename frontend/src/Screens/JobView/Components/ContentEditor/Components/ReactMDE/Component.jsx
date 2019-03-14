import * as React from "react";
import PropTypes from 'prop-types';
import ReactMde from "react-mde";
import * as Showdown from "showdown";

export default class extends React.Component {
  
  static propTypes = {
    job: PropTypes.object.isRequired,
    input: PropTypes.object.isRequired
  }

  converter: Showdown.Converter;
  
  render() {

    this.converter = new Showdown.Converter({
      tables: true,
      simplifiedAutoLink: true
    });

    const { job, input } = this.props;
    const { onChange } = input;

    return (            
      <ReactMde
        onChange={onChange}
        value={job.content}
        generateMarkdownPreview={markdown =>
          Promise.resolve(this.converter.makeHtml(markdown))
        }
        minEditorHeight={400}
      /> 
    );
  }
}
