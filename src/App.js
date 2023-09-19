import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border-radius: 20px;
  background-color: white;
  width: 360px;
`;
const Media = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const MediaBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Avatar = styled.div`
  margin-right: 25px;
`;
const AvatarImg = styled.img`
  width: 60px;
  width: 60px;
  border-radius: 50%;
  background-color: darkslategray;
`;
const MediaContent = styled.div`
  display: flex;
  flex-direction: column;
`;
const FullName = styled.span`
  color: var(--black, #000);
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const Jobs = styled.span`
  color: var(--muted-color, #78858f);
  font-family: "Times New Roman", Times, serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 25.5px;
  letter-spacing: 0.5px;
`;
const CardImageBody = styled.img`
  width: 360px;
`;
const Icon = styled.div`
  display: flex;
  flex-direction: column-reverse;
  cursor: pointer;
`;
const Dot = styled.img`
  height: 5px;
  padding-bottom: 3px;
`;
const CardFooterText = styled.div`
  color: var(--muted-color, #78858f);
  display: flex;
  align-items: center;
  align-self: stretch;
  padding: 25px;
`;

const App = () => {
  return (
    <Container>
      <div className="card-head">
        <Media>
          <MediaBody>
            <Avatar>
              <AvatarImg src="./img/Avatar.png"></AvatarImg>
            </Avatar>
            <MediaContent>
              <FullName>Nazım ÖZTÜRK</FullName>
              <Jobs>Web Development</Jobs>
            </MediaContent>
          </MediaBody>
          <div className="edit">
            <Icon>
              <Dot src="./img/dot.png"></Dot>
              <Dot src="./img/dot.png"></Dot>
              <Dot src="./img/dot.png"></Dot>
            </Icon>
          </div>
        </Media>
      </div>

      <div className="card-image">
        <CardImageBody src="./img/res1.jpeg"></CardImageBody>
      </div>
      <div className="card-footer">
        <CardFooterText>3 September 2019</CardFooterText>
      </div>
    </Container>
  );
};

export default App;
