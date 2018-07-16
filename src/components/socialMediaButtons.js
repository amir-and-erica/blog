import React from 'react'
import styled from 'styled-components'
import {EmailIcon, FbIcon, TwitterIcon} from './icons'
import Color from '../layouts/colors'

const Center = styled.div`
	display: flex;
  flex-direction: row;
	justify-content: center;
	align-items: center;
	height: 70px;
	text-align: center;
	margin-top: 30px;
`;

const IconContainer = styled.a`
	display: block;
	height: 40px;
	width: 40px;
	padding: 5px;
	box-sizing: border-box;
	border-radius: 4px;
	margin: 0 5px;
  background-color: ${Color('pink')};
  box-shadow: 3px 3px 10px rgba(0,0,0,0.05);
	@media not all and (hover: none) {
		&:hover{
      background-color: ${Color('pink')};
		}
	}
`;

const Contain = styled.div`
	height: 100%;
	align-items: center;
	display: flex;
	justify-content: center;
	object-fit: contain;
`;

const Label = styled.h4`
  margin-right: 10px;
`

const SocialMediaButtons = () => {

	const twitterUrl = "https://twitter.com/intent/tweet?url=https%3A%2F%2Fbythebay.cool%2Felection%2F&text=SF+and+CA+voted+on+some+rad+races+and+propositions.+Check+out+@bythebaydotcool’s+election+result";
	const facebookUrl = "https://www.facebook.com/dialog/share?app_id=1134187086655814&display=popup&href=https%3A%2F%2Fbythebay.cool%2Felection%2F";
	const emailUrl = "mailto:?subject=voter guide&body=Check out this nonpartisan voter guide https://bythebay.cool/";

	return(
    <Center>
      <Label>Sharing is dot cool</Label>
      <Icon url={emailUrl} img={<EmailIcon/>}/>
    	<Icon url={facebookUrl} img={<FbIcon/>}/>
    	<Icon url={twitterUrl} img={<TwitterIcon/>}/>
		</Center>
	);
}

const Icon = (props) => {
	return(
  	<IconContainer
  		target="_blank"
  		rel="noopener noreferrer"
  		href={props.url}
  	>
  		<Contain>{props.img}</Contain>
  	</IconContainer>
	);
}

export default SocialMediaButtons;
