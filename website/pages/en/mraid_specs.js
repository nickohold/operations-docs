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

class MraidSpecs extends React.Component {
  render() {
    const siteConfig = this.props.config;
    
    const PageContainer = props =>(
        <div id="mraid_iframe_container">
      <iframe id="mraid_specs" src="https://docs.google.com/document/d/e/2PACX-1vQsHULf7bD_WpBOnUkL80birWOHZo1qkrLRZ9YvI4DT1QypHH1OaYNoa20AQJkGNpHnCRe2WLzt6G-R/pub?embedded=true">
      </iframe>
      </div>
);
return (
      <PageContainer>
      </PageContainer>
    );
  }
}

MraidSpecs.title = 'My Custom title';

module.exports = MraidSpecs;