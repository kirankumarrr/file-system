import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import md5 from 'md5';

import SEO from '../SEO';

import { showPathEntries, entriesAreSame } from '../../utils/fileSystem';
import { FOLDER } from '../../utils/constants';
import { addEntry, deleteEntry } from '../../actions/fileSystem';

import Icon from '../Icon';
import Add from '../Add';

import FolderIcon from '../../assets/img/folder.png';
import { withRouter } from '../../utils/withRouter';

class Grid extends Component {
  componentDidMount() {
    console.log(' this.props :', this.props);
    const loc = md5(this.props?.location.pathname + FOLDER)
    if (
      this.props?.fileSystem && this.props?.location?.pathname &&

      !Object.keys(this.props?.fileSystem).includes(
        loc
      )
    ) {
      this.props?.navigate('/');
    }
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.props?.location.pathname === nextProps.location.pathname) {
  //     if (entriesAreSame(this.props?.entry, nextProps.entry)) {
  //       return false;
  //     }
  //     return true;
  //   }
  //   return true;
  // }



  render() {
    console.log('this.propsGrid', this.props);
    return (
      <Container>
        <SEO
          url={this.props?.match?.url}
          title={this.props?.match?.url}
          image={FolderIcon}
          description={this.props?.match?.url}
        />
        {this.props?.entry.map((entry, _) => (
          <Icon
            entry={entry}
            index={_}
            key={`${entry.path}_${entry.type}`}
            deleteFn={() => {
              this.props?.deleteEntry(md5(entry.path + entry.type));
            }}
          />
        ))}
        <Add
          saveEntry={value => {
            this.props?.addEntry({
              ...value,
              parentID: md5(this.props.location.pathname + FOLDER),
              parentPath: this.props.location.pathname
            });
          }}
        />
      </Container>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const path = ownProps.location.pathname
  return {
    entry: showPathEntries(path, state.fileSystem),
    fileSystem: state.fileSystem
  };
};


export default withRouter(connect(
  mapStateToProps,
  { addEntry, deleteEntry }
)(Grid));

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 40px 0;
`;



