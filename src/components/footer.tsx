"use client";

import { Box, Container, ImageList, Stack, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import Link from "next/link";
const data_ = [
  "Нүүр",
  "Холбоо барих",
  "Хоолны цэс",
  "Үйлчилгээний нөхцөл",
  "Хүргэлтийн бүс",
  "Нууцлалын бодлого",
];

type FooterType = {
  data?: string;
};

export default function Footer(props: FooterType) {
  const { data } = props;
  return (
    <>
      <Stack
        style={{
          background: "red",
          backgroundImage: "url(/footer_img.png)",
          position: "relative",

          padding: "120px 114px",
        }}
        minWidth="1500px"
      >
        <Stack direction="column" alignItems="center">
          <Stack direction="row" alignItems="center">
            <ImageList sx={{ width: 41, height: 41 }} cols={1} rowHeight={41}>
              <img src="./main_logo.svg"></img>
            </ImageList>
            <Typography>Food Delivery</Typography>
          </Stack>
          <Stack>
            {data_.map((data, index) => (
              <Link key={index} href={`./login`}>
                {data}
              </Link>
            ))}
          </Stack>
          <Stack direction="row">
            <FacebookIcon></FacebookIcon>
            <InstagramIcon />
            <XIcon />
          </Stack>
          <Stack></Stack>
          <hr style={{ background: "#fff" }}></hr>
          <Typography>© 2024 Pinecone Foods LLC</Typography>
          <Typography>Зохиогчийн эрх хуулиар хамгаалагдсан.</Typography>
        </Stack>
      </Stack>
    </>
  );
}
