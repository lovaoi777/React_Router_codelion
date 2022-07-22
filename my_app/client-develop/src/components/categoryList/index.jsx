import styled from 'styled-components';

export default function CategoryIconList() {


  return (
    <>
    <CategoryIconListWrapper>
      <CategoryIcon
       key={1}
       text={'운동/스포츠'}
       icon={`/img/sports.svg`} 
       color={'#3282F6'}
       />  

      <CategoryIcon
       key={2}
       text={'외국/언어'}
       icon={`/img/language.svg`} 
       color={'#72F2EB'} />   
       
       <CategoryIcon
       key={3}
       text={'문화/공연'}
       icon={'/img/art.svg'} 
       color={'#FDE9FF'} />  


      <CategoryIcon
      key={4}
       text={'악기'}
       icon={'/img/instrument.svg'} 
       color={'#75F94D'} />

      <CategoryIcon
       key={5}
       text={'봉사'}
       icon={'/img/volunteer.svg'} 
       color={'#EA3680'} />
    
      <CategoryIcon
       key={6}
       text={'댄스'}
       icon={'/img/dance.svg'} 
       color={'#FFFD55'} />

      <CategoryIcon
       key={7}
       text={'사교'}
       icon={'/img/networking.svg'} 
       color={'#FFFE91'} />  
      <CategoryIcon
       key={8}
       text={'자동차'}
       icon={'/img/car.svg'} 
       color={'#1FBFCB'} />  

      <CategoryIcon
       key={9}
       text={'반려동물'}
       icon={'/img/animal.svg'} 
       color={'#8E403A'} />

      <CategoryIcon
       key={10}
       text={'여행'}
       icon={'/img/airport.svg'} 
       color={'#7FBACC'} />  

      <CategoryIcon
       key={11}
       text={'요리'}
       icon={'/img/cook.svg'} 
       color={'#EA5D2C'} />  


      <CategoryIcon
       key={12}
       text={'독서'}
       icon={'/img/book.svg'} 
       color={'#FFEC5C'} />  

    </CategoryIconListWrapper>

</>
  );
}
export const CategoryIconListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 351px;
  margin: auto;
`;
export function CategoryIcon({ text, icon, color }) {
  return (
    <>
    <IconContainer  onClick={()=>console.log(text)}>
      <IconWrapper color={color}>
      <img
      src={icon}
      className='sports'
      alt='React'
      style={{width:'40px', height:'40px' }}
      />
      </IconWrapper>
      <p style={{ textAlign: 'center' , fontSize:'7px' }}>{text}</p>
    </IconContainer>
    
    </>
  );
}

export const IconContainer = styled.div`
  width: 55px;
  height: 50px;
  margin: 1rem;
`;

export const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ color }) => color};
`;
