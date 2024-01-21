import { FC, useEffect, useState } from "react";
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
  Grow,
} from "@mui/material";
import { getHorowitzData } from "@/api";

interface TextComponentProps {
  text1: string;
  text2: string;
}

import { PortableText, PortableTextComponents } from "@portabletext/react";
import { useHorowitzStore } from "@/store/horowitzStore";
import { useTranslation } from "react-i18next";

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <Typography variant="bodyRegular" component={"p"}>
        {children}
      </Typography>
    ),
  },
};

const TextComponent: FC<TextComponentProps> = ({ text1, text2 }) => {
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

const HorowitzPage: FC = () => {
  const {
    i18n: { language },
    t,
  } = useTranslation();

  const fetchHorowitzData = useHorowitzStore(
    (state) => state.fetchHorowitzData
  );

  useEffect(() => {
    fetchHorowitzData(language);
  }, [fetchHorowitzData, language]);

  const { loading, horowitzData } = useHorowitzStore();

  console.log(horowitzData);
  console.log(loading);
  return (
    <PageTemplate>
      <Container>
        <Typography variant="h2" gutterBottom>
          Заголовок
        </Typography>
        {/* <PortableText
          value={horowitzData?.upperBlockText}
          components={components}
        /> */}

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
