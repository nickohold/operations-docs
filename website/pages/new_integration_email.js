/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class MyPage extends React.Component {
  render() {
    const siteConfig = this.props.config;

    const PageContainer = props => (
      <iframe id="new integration email" src='email_content.html' style={{width:'100%',height:'100%',padding:0,margin:0}}></iframe>
    );
    return (
      
      <PageContainer>
        
      </PageContainer>
    );
  }
}

MyPage.title = 'My Custom title';

module.exports = MyPage;
