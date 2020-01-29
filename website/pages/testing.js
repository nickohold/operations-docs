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

// class MyPage extends React.Component {
//   render() {
//     const {siteConfig, language = ''} = this.props;
//     const {baseUrl, docsUrl} = siteConfig;
//     const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
//     const langPart = `${language ? `${language}/` : ''}`;
//     const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

//     const SplashContainer = props => (
//       <div className="homeContainer">
//         <div className="homeSplashFade">
//           <div className="wrapper homeWrapper">{props.children}</div>
//         </div>
//       </div>
//     );

//     const ProjectTitle = () => (
//       <h2 className="projectTitle">
//         {siteConfig.title}
//         <small>{siteConfig.tagline}</small>
//       </h2>
//     );

//     const PromoSection = props => (
//       <div className="section promoSection">
//         <div className="promoRow">
//           <div className="intro">{props.children}
//           <p>
//             Welcome to the new Ironsource OnBoarding documentation site!
//             <br />
//             We are working hard on adding useful information to assist with the onboarding process.
//             <br />
//             In the meantime, feel free to check out our <a href={docUrl('OnBoarding.html')}>OnBoarding</a> documentation.

//           </p>
          
//           </div>
//         </div>
//       </div>
//     );

//     return (
//       <SplashContainer>
//         <div className="inner">
//           <ProjectTitle siteConfig={siteConfig} />
//           <PromoSection>
//           </PromoSection>
//         </div> 
//       </SplashContainer>
//     );
//   }
// }

class MyPage extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const FeatureCallout = () => (
      <div>
      </div>
    );
    // className="productShowcaseSection paddingBottom"
    // style={{textAlign: 'center'}}>
    // <h2>Feature Callout</h2>
    // <MarkdownBlock>These are features of this project</MarkdownBlock>

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content: '',
            image: `${baseUrl}img/undraw_onboarding_o8mv.svg`,
            imageAlign: 'bottom',
            title: '',
          },
          // {
          //   content: 'The content of my second feature',
          //   image: `${baseUrl}img/undraw_operating_system.svg`,
          //   imageAlign: 'top',
          //   title: 'Feature Two',
          // },
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
          {/* <Showcase /> */}
        </div>
      </div>
    );
  }
}

MyPage.title = 'My Custom title';

module.exports = MyPage;
