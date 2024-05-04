"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageSlider.css";
import { useTheme } from "@/components/ThemeProvider";
// Now here we will access the theme context because this is the client component

export default function ClientRoutePage() {
  const theme = useTheme();
  const settings = {
    dots: true,
  };
  return <h1 style={{ color: theme.colors.primary }}>Client route</h1>;
}
