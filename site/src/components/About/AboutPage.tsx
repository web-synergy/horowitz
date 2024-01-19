import PageTemplate from '../Common/PageTemplate';
import { Container, Link, Typography, Button, Stack } from '@mui/material';
import SvgSpriteIcon from '../Common/SvgSpriteIcon';

const AboutPage = () => {
  return (
    <PageTemplate>
      <Container>
        <div>About Competition</div>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga adipisci
          dicta sit, quod quae architecto tenetur. Quidem odio similique eveniet
          cum aperiam et debitis obcaecati?
          <Link variant="linkBlock">some link </Link> Aliquam, modi similique.
          Inventore, dolorem! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Odio, illum aperiam aut optio animi quas dolorem sunt facilis
          fugit labore harum voluptate nesciunt iure. Asperiores temporibus
          dolor quibusdam vitae reprehenderit!
        </Typography>
        <Stack direction="row" gap={3} flexWrap={'wrap'}>
          <Button>Заявка на участь</Button>
          <Button>Дивитись онлайн-трансляцію</Button>
          <Button>На головну сторінку</Button>
          <Button variant="secondary">Підтримати проєкт</Button>
          <Button variant="transparent">Показати більше</Button>
        </Stack>
        <Link>
          Переглянути всі
          <SvgSpriteIcon icon="arrow" sx={{ transform: 'rotate(-90deg)' }} />
        </Link>
      </Container>
    </PageTemplate>
  );
};

export default AboutPage;
