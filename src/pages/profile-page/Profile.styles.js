import { styled } from 'styled-components'
import { ButtonPurple } from '../../App.styles'

export const Container = styled.div`
  //   width: 100%;
  //   display: flex;
  //   flex-direction: column;
  //   max-width: 1160px;
  //   gap: 75px;
`

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  gap: 40px;
  margin-bottom: 75px;
`

export const Line = styled.p`
  color: #000;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
`

export const AllButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`

export const AllLines = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const ProfileButton = styled(ButtonPurple)`
  width: 275px;
`

export const CardPart = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const Title = styled.h2`
  font-size: 48px;
  line-height: 56px;
`

export const CardList = styled.div`
  margin-top: 20px;
  display: grid;
  //   grid-template-columns: 360px 360px 360px;
  grid-template: auto/ repeat(3, 360px);
  justify-content: space-between;
  row-gap: 44px;
`

export const Card = styled.div`
  position: relative;
  width: 360px;
  height: 480px;
  border-radius: 30px;
  background: #fff;
  box-shadow:
    -10px 10px 15.99882px 0px rgba(0, 0, 0, 0.1),
    10px -10px 16px 0px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`

export const Image = styled.img``

export const RedirectButton = styled.button`
  color: #000;
  font-size: 20px;
  line-height: 115%;
  height: 43px;
  width: 136px;
  position: absolute;
  left: 30px;
  bottom: 27px;
  border-radius: 80px;
  background: #c7e957;
  border: 0;
  &:hover {
    background-color: #daf289;
  }
`

export const TitleCard = styled.p`
  position: absolute;
  left: 50px;
  top: 50px;
  color: #000;
  font-size: 36px;
  font-style: normal;
  font-weight: 800;
  line-height: 110%;
  letter-spacing: -0.5px;
`
