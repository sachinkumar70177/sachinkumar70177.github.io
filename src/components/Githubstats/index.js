import React from 'react'
import styled from 'styled-components'
import GitHubCalendar from 'react-github-calendar';

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
@media (max-width: 960px) {
    padding: 0px;
}`
const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 40px 0px 0px 0px;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;
const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;
const Contribution=styled.div`
width: 100%;
height: 180px;
background-color: ${({ theme }) => theme.white};
border-radius: 10px;
padding:40px 10px 10px 10px;
box-shadow: 0 0 16px 2px rgba(0,0,0,0.3);
transition: all 0.5s ease-in-out;
&:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(0,0,0,0.6);
    filter: brightness(1.0);
}
// display: flex;
// align-items: center; /* Vertically center */
// justify-content: center; /* Horizontally center */
`;
const Image = styled.img`
    width: 100%;
    height: 180px;
    background-color: ${({ theme }) => theme.white};
    border-radius: 10px;
    box-shadow: 0 0 16px 2px rgba(0,0,0,0.3);
    transition: all 0.5s ease-in-out;
    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 0 50px 4px rgba(0,0,0,0.6);
        filter: brightness(1.1);
    }
`

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;
const Card = styled.div`
    width: 530px;
    height: 800px;
    background-color: ${({ theme }) => theme.card};
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0 0 12px 4px rgba(0,0,0,0.4);
    overflow: hidden;
    padding: 26px 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    transition: all 0.5s ease-in-out;
    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 0 50px 4px rgba(0,0,0,0.6);
        // filter: brightness(1.1);
    }

    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
        width: 380px;
    height: 790px;
    }
  
`
function Githubstats() {
  return (
    <Container id="home">
    <Wrapper>
<Title >GithubStats</Title>
<Desc>
   
"GitHub Stats" offers a concise overview of my GitHub contributions and coding skills.


</Desc>
<Card>
    <Image src='https://github-readme-streak-stats.herokuapp.com/?user=sachinkumar70177&theme=dracula&hide_border=true' id="github-streak-stats"></Image>
    <Image src='https://github-readme-stats.vercel.app/api/top-langs/?username=sachinkumar70177&layout=pie' id="github-top-langs">

    </Image>
    <Image src="https://github-readme-stats.vercel.app/api?username=sachinkumar70177&show_icons=true&locale=en" alt="sachinkumar70177" id="github-stats-card" >

    </Image>
    <Contribution className="react-activity-calendar">
    <GitHubCalendar  username="sachinkumar70177"  />
  </Contribution>
</Card>

    </Wrapper>
    </Container>
  )
}

export default Githubstats