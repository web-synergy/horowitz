import { FC, useEffect } from "react";
import PageTemplate from "../Common/PageTemplate";
import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { getHorowitzData } from "@/api";

interface TextComponentProps {
  text1: string;
  text2: string;
}

const TextComponent: FC<TextComponentProps> = ({ text1, text2 }) => {
  // const [horowitzData, setHorowitzData] = useState(null);
  // console.log(horowitzData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const language = "ua"; // Замените на нужный язык
        const data = await getHorowitzData(language);
        console.log(data);
        // setHorowitzData(data);
      } catch (error) {
        console.error("Error fetching Horowitz data:", error);
        // Обработка ошибки, если необходимо
      }
    };

    fetchData();
  }, []);
  return (
    <Card
      style={{ display: "flex", flexDirection: "column", marginBottom: "24px" }}
    >
      <CardContent
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: "1", marginBottom: "16px" }}>
          <Typography variant="body1">{text1}</Typography>
        </div>
        <div style={{ flex: "1", marginBottom: "16px" }}>
          <Typography variant="body1">{text2}</Typography>
        </div>
      </CardContent>
    </Card>
  );
};

const HorowitzPage = () => {
  return (
    <PageTemplate>
      <Container>
        <Typography variant="h2" gutterBottom>
          Заголовок
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextComponent
              text1="Текст блока 1, колонка 1"
              text2="Текст блока 2, колонка 1"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextComponent
              text1="Текст блока 1, колонка 2"
              text2="Текст блока 2, колонка 2"
            />
          </Grid>
        </Grid>
        <Card style={{ marginTop: "24px", marginBottom: "24px" }}>
          <CardContent>
            <img src="" alt="Картинка" style={{ width: "100%" }} />
          </CardContent>
        </Card>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextComponent
              text1="Текст блока 3, колонка 1"
              text2="Текст блока 4, колонка 1"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextComponent
              text1="Текст блока 3, колонка 2"
              text2="Текст блока 4, колонка 2"
            />
          </Grid>
        </Grid>
        <Typography variant="h4" gutterBottom>
          Литература
        </Typography>
        <List>
          {/* Здесь добавьте элементы списка литературы */}
          <ListItem>
            <ListItemText primary="Название книги 1" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Название книги 2" />
          </ListItem>
          {/* Добавьте еще элементов, по вашему желанию */}
        </List>
        <Button variant="outlined" color="primary">
          Показать больше
        </Button>
      </Container>
    </PageTemplate>
  );
};

export default HorowitzPage;
