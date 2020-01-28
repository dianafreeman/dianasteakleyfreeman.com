import React from 'react';
import { Link } from 'gatsby';
// import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import hastToHyperscript from 'hast-to-hyperscript';
import { Title } from '../Type/Titles';
import * as htmlAsT from './htmlAsT';

const Image = styled.img`
  width: 100%;
  margin: auto;
  @media screen and (min-width: ${props => props.theme.screen.md}){
    float: right;
    width: 45%;
    margin: 0 1em;
  }
`;
const POST = {
  frontmatter: {
    path: '/blog/digital-self-care',
    date: '2019-03-31',
    slug: 'digital-self-care',
    title: 'Digital Self-Care in the era of #InsertCrisisHere',
  },
  timeToRead: 4,
  headings: [
    {
      value: 'Digital Self-Care in the era of #InsertCrisisHere',
      depth: 1,
    },
  ],
  html:
    '<h1>Digital Self-Care in the era of #InsertCrisisHere</h1>\n<p><em>Note: this piece was originally published on the PsyberGuide Medium. You can read it</em> <a href="https://medium.com/psyberguide/digital-self-care-in-the-era-of-insertcrisishere-a49d661b9d11"><em>here</em></a><em>.</em></p>\n<p>We have become accustomed to reading the latest headlines from a newsfeed.</p>\n<p>Discussions of disaster, mass tragedy, and political scandal used to  remain comfortably quarantined behind an anchor’s desk. Now, social  media has outperformed traditional journalism in its influence over how  we consume and share information — social, personal, political, or  otherwise.</p>\n<p>Noteworthy topics of the last year ranged from controversial to  inflammatory, including commentaries on mental health: the release (and  subsequent Season 2 premier) of “Thirteen Reasons Why”, proposed cuts to funding for mental health care, and the emotional “stability” of the  millennial generation, to name a few.</p>\n<p>My own feeds have been especially relentless, this year, in  presenting headlines of harassment, abuse, gun violence, and natural  disaster. In fact, I have taken a few respite periods from my accounts  when the weight of watching personal and/or national traumas unfold from behind a computer screen becomes too upsetting to maintain.</p>\n<p>Our news feeds themselves have evolved since their original inception in the early 2000’s. Now, our feeds are personalized, and  programmatically curated to show us the stories that matter to us — the  ones that feel personal. Social media have become incontrovertibly  convenient in my own life, and I use them for reasons I consider  valuable: I stay connected with old friends on Facebook, I watch  real-time stories unfold on Twitter, and I document the life of my  particularly photogenic dog on Instagram.</p>\n<p>This type of technology can be great. It allows communities to  mobilize and communicate around shared interests, it provides a space to share common experiences, and it can promote a sense of community.</p>\n<p>It <em>also</em> means that when someone in your “network” experiences a tragedy, to anyone in that network, said tragedy is <strong>headline news</strong>. Have you ever heard about something awful — a death, a disaster — not from the news, but from your facebook feed?</p>\n<p>Now let’s put that on a national scale. Imagine that the disaster  you’re experiencing isn’t merely all over the newsfeeds of the people  you’re friends with — it’s also in the print newspapers, broadcasted on  national television, on the radio, and is a regular topic of discussion  among peers.</p>\n<p>I use a variety of social platforms for both personal and  professional reasons. I try to keep up with current events, and remain  aware of the social climate that I inhabit from day-to-day; in fact,  staying aware is extremely important to me.</p>\n<p>But managing the influx of emotional and poignant news can be  overwhelming. Close friends of mine have chosen to disconnect entirely  from social media, and I empathize deeply with their reasons for doing  so. For me, completely “unplugging” would create a different set of  personal and professional obstacles, making it an unrealistic long-term  solution.</p>\n<p>I’ve spent a lot of time discussing — both professionally, and among  friends — how to navigate the delicate balance of benefits and  hindrances that social media can provide.</p>\n<p>Its 2018 now, and the troublesome headlines of last year show no sign of slowing down. Chances are that you, or someone you love, has been  personally affected by at least one conversation on the national hashtag stage.</p>\n<p>In 2011, MIT’s Sherry Turkle published a landmark book on the impact  of social media on society and communication titled “Alone Together”; if you’ve spent any time at all watching home-hitting hashtags (e.g.  #MeToo, #BelieveWomen, #WhyIStayed, #PrayForOrlando) make tidal waves  across the internet, you are probably as familiar as I am with what she  means.</p>\n<p>As the web continues to expand and evolve, there will never be one  “right way” to practice self-care on the internet. But however you  choose to engage (or not) with the era of #InsertCrisisHere, a few  important points still bear repeating.</p>\n<ol>\n<li><strong>Follow the Airplane Rule — “Put your own oxygen mask on first”.</strong> Everyone needs help sometimes — including you. It can be powerful to reach out  to other survivors, participate in protests, and make your story and  voice heard; it is <em>equally</em> important to take care of yourself too.</li>\n<li><strong>Choose your words carefully.</strong> When you talk about the outcome of a tragedy, or the actions of a  perpetrator you are also describing the experience of a survivor. Be  mindful of <em>how</em> you describe a disaster, an assailant, or an affected community. Chances are, those survivors are on the internet too.</li>\n<li><strong>Trauma is an experience, not an event; your experience — no matter what it is — is valid.</strong> You may find yourself feeling anxious, scared, or ashamed. You may  experience guilt over your own contributions — or lack thereof — to  conversations that affect you. You may find yourself feeling “unworthy”  of experiencing distress because “other people have it worse”.</li>\n<li>You do not owe your story to anyone.\nYou do not owe your comment to anyone.\nAnd <strong>you are NOT alone.</strong></li>\n</ol>\n<p>If you or someone you love is in crisis, please call 9–1–1 or go to the nearest emergency room.</p>\n<p>National Sexual Assault Hotline: 1–800–656–4673\nSAMHSA Disaster Distress Helpline: 1–800–985–5990\nNational Suicide Prevention Lifeline: 1–800–273-TALK (8255)</p>',
};

const ArticleWrap = styled.article`
  padding: 1em;
  width: inherit;
`;
const Content = styled.div`
  color: white;
`;
const Body = styled.div`
  padding-top: 10px;
`;

const MetaBox = styled.div`
border: 2px dashed white
padding: 0.5em;
line-height: 1.5em;
width: 100%;
margin-bottom: 1em;
@media screen and (min-width: ${props => props.theme.screen.md}){
  width: 50%;
  float: left;
}
`;

const MetaContent = styled.small`
  font-style: italic;
`;

const MetaLabel = styled.small`
  font-weight: 600;
  font-style: italic;
`;
const Icon = styled.span`
  padding-right: 0.5em;
`;

const renderHtmlToReact = node => {
  // the h1 is included as part of the "heading" node, and
  // is used in the nav sidebar

  // TODO: can this h1 be filtered out on the GraphQL side?
  const { type, children } = node;
  children.filter(child => child.tagName !== 'h1'); // --> remove the h1, because we're displaying it separately
  return hastToHyperscript(React.createElement, {
    type,
    children: children.filter(child => child.tagName !== 'h1'),
  });
};

const Article = ({ post = POST, title = 'A Title', ...restProps }) => {
  return (
    <ArticleWrap {...restProps}>
      <Content>
        <Title>{post.frontmatter.title}</Title>
      </Content>
      <Content>
        <Body>
          <MetaBox>
            <Icon>⏱</Icon>
            <MetaLabel>Time to read: </MetaLabel>
            <MetaContent>{`${post.timeToRead} minutes`}</MetaContent>
            <br />
            <Icon>🏷</Icon>
            <MetaLabel> Tags: </MetaLabel>
            <MetaContent>a tag, a tag, and another</MetaContent>
            <br />
            <Icon>👷🏾‍♀️</Icon>
            <MetaLabel>Built with: </MetaLabel>
            {`${post.frontmatter.date}`}
          </MetaBox>
          <Image src="https://via.placeholder.com/500x300" alt="" />

          <div>{renderHtmlToReact(htmlAsT)}</div>
        </Body>
      </Content>
    </ArticleWrap>
  );
};

export default Article;
