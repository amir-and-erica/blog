import React from "react"
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components'
import Link from 'gatsby-link'
import Color from './colors'
import Acronym from '../components/acronym'

const FooterWrapper = styled(Row)`
	display: flex;
	background-color: navy;
	background:linear-gradient(45deg,${Color('darkpurple')},${Color('blue')});
	padding-top: 70px;
	padding-bottom: 70px;
  @media print {
    display: none;
  }
`;

const PrintOnly = styled.div`
	display: none;
	@media print {
		padding: 20px;
		background-color: #eee;
		text-align: center;
		display: block;
  }
`;

const Section = styled.div`
	margin-bottom: 30px;
	margin-top: 0;
`;

const Title = styled.h4`
	color: white;
	margin: 0;
`;

const FooterLink = styled(Link)`
  font-family: Roboto Condensed, Helvetica Condensed, Helvetica Neue, Helvetica, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.3px;
	font-size: 12px;
	line-height: 15px;
	color: ${Color('pink')};
	text-decoration: none;
	margin: 0;
`;

const List = styled.ul`
	padding-left: 0;
`;
const ListItem = styled.li`
	margin: 0;
	list-style: none;
`;
const FinePrint = styled.div`
	margin-bottom: 35px;
	font-size: 13px;
	line-height: 18px;
	color: white;
`;



//-- each section is a collection of links
const FooterSection = (props)	=> {
	const linkList = props.links.map( (link, index) =>
		<ListItem key={index}>
			<FooterLink to={link.url}>{link.text}</FooterLink>
		</ListItem>
	)

	return (
		<Section>
			<Title>{props.title}</Title>
			<List>
				{linkList}
			</List>
		</Section>
	);

}

const Footer = () => {
	return (
			<React.Fragment>
				<PrintOnly>See more at www.bythebay.cool</PrintOnly>
				<FooterWrapper>
			    <Col
			    	xsOffset={1} xs={10}
			    	smOffset={1} sm={4}
		  			mdOffset={1} md={4}
		  			lgOffset={1} lg={4}
					>
						<FinePrint>
							Local politics drives our daily life. We strive to be nonpartisan and present all perspectives fairly, so please send us a note via <Acronym expanded='hi@bythebay.cool' acronym='email' singleClick={true} highlightOnClick={true}/> or <Acronym expanded='(415) 617-5970' acronym='text' singleClick={true} highlightOnClick={true}/> with any corrections, concerns, or questions.
							<br /><br />
							Pretty much all rights reserved &copy; By The Bay 2018
						</FinePrint>
					</Col>

		    </FooterWrapper>
			</React.Fragment>
	);
}

const footerLinks = [
	{text: "🇺🇸 voter guide", url: "/election/"},
	{text: "🏠 housing shortage", url: "/housing-shortage/"},
	{text: "⚙️  how SF works", url: "/how-sf-works/"},
]

const footerLinks2 = [
	{text: "✉️ Subscribe", url: "/subscribe/"},
	{text: "🚀 support us", url: "/support-us/"},
	{text: "👋 about us", url: "/wtf/"},
	{text: "📝 terms", url: "/terms/"},
	{text: "🔎 privacy ", url: "/privacy/"},
	{text: "👪 community ", url: "/community-values/"},
]
	// {text: "💻 Work with us ", url: "/jobs/developer-designer"},

export default Footer;
