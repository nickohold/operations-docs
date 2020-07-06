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
      <iframe id="mraid_specs" src="https://docs.google.com/document/d/e/2PACX-1vTkOkPmaR1M3ih2SBGrRVD4RiPjMwCeWgM9coQrtjR9R-6DVBRjN_J37QVaUZ_ubkd_KSUwYG8WVdVA/pub?embedded=true">
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