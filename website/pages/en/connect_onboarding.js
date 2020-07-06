/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class connect extends React.Component {
  render() {
    const siteConfig = this.props.config;
    
    const PageContainer = props =>(
      <div style={{position:'relative',width:'100%',height:'100%',padding:0,margin:0,overflow: "scroll"}}>
      Hi
  </div>
);
return (
      <PageContainer>
      </PageContainer>
    );
  }
}

connect.title = 'My Custom title';

module.exports = connect;