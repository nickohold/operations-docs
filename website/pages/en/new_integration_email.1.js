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

class MyPage extends React.Component {
  render() {
    const siteConfig = this.props.config;
    
    const PageContainer = props =>(
      <div style={{position:'relative',width:'100%',height:'100%',padding:0,margin:0,overflow: "scroll"}}>
      <div style={{position:'relative',left:"10%",top:"10px"}}>
          <h3 style={{marginTop:"10px"}}>RTB Integeration Steps</h3>
          <ol>
              <li>Go over the <a href="https://docs.google.com/forms/d/e/1FAIpQLSc0iIe-HdHrGPfALciY92xB2dYCzDGst3252-_d6g2v7JYRYw/viewform">questionnaire</a> and make sure: 
                <ol type="1">
                <li>Client meets avg response time</li>
                <li>Relevant traffic (env, 3rd party, ad unit, creatives)</li>
                </ol>
              </li>
              <li>Send email with RTB intro flow (copy from the bottom of the screen).</li>
              <li>Setup the connection on Admin platform: 
                <ol type='1'>
                  <li>Seller name: lowercase, no spaces or underscore (only hyphen character allowed).</li>
                  <li>Start with only 1 unit, the one most relevant to the client.</li>
                  <li>Target the top country.</li>
                  <li>Max 10 qps for the integration stage.</li>
                  <li>For RV - ad source with requests limit first, do not open auctioneer yet. Not NVS yet! And remember - after integration, remove simharif and add to NVS.</li>
                  <li>Add relevant custom keys:
                      <ol type='i'>
                        <li>allowMRAIDResponses = true for MRAID RV.</li>
                        <li>For Vpaid: enableVpaid= true & vpaidStartTimeout = 4</li>
                    </ol>
                  </li>
                </ol>
              </li>
              <li>Input the endpoint to the [EndPoint table|https://docs.google.com/spreadsheets/d/1Gld7mJzM8ALE3uyyGXj84jY4YavCKZjaid7RRYk22Fk/edit#gid=0]: 
                <ol type='1'>
                    <li>If Display- mark the Auctioneer settings “Interstitial”.</li>
                    <li>If RV- NO auctioneer traffic at first only “simharif”- NO marking in auctioneer settings.</li>
                </ol>
              </li>
              <li>Once the test is underway, pull some responses and validate it is running properly, and the creative meets our (IS and SDK) requirements.</li>
              <li>Check Discrepancy with client (article 2.c [here|https://docs.google.com/document/d/1KzGZDM8QwHtyTf6ldMDq49e-tV5n56HQjwZJCDgqjps/edit?ts=5e1c6e0a])</li>
              <li>If everything is alright, increase scale slowly over the next week, check discrepancy every 2 days. </li>
              <li>After the testing week, if no other issues arise, hand over to AM.</li>
          </ol>
          <p dir="ltr" style={{borderBottomColor:"black"}}></p>
      </div> <iframe id="new_integration_email" src='email_content.html' ></iframe>
  </div>
);
return (
      <PageContainer>
      </PageContainer>
    );
  }
}

MyPage.title = 'My Custom title';

module.exports = MyPage;