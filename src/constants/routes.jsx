import { lazy } from "react";
import Layout from "../Layout";
import Loader from "../globals/Loader";

const Home = lazy(() => import("../pages/Home"));
const CategoryCarRent = lazy(() => import("../pages/CategoryCarRent"));
const Saved = lazy(() => import("../pages/Saved"));
const CarDetails = lazy(() => import("../pages/CarDetails"));
const Payment = lazy(() => import("../pages/Payment"));
const Profile = lazy(() => import("../pages/Profile"));
const AccountSettings = lazy(() => import("../pages/AccountSettings"));
const Login = lazy(() => import("../pages/Login"));
const Signup = lazy(() => import("../pages/Signup"));

export const routes = [
  {
    title: "Login Page",
    url: "/login",
    page: <Login />,
  },
  {
    title: "Signup Page",
    url: "/sign-up",
    page: <Signup />,
  },
  {
    title: "Home Page",
    url: "/",
    page: <Layout page={<Home />} />,
  },
  {
    title: "CategoryCarRent Page",
    url: "/car-categories",
    page: <Layout page={<CategoryCarRent />} />,
  },
  {
    title: "Loader Page",
    url: "/loader",
    page: <Layout page={<Loader />} />,
  },
  {
    title: "Saved Items Page",
    url: "/saved",
    page: <Layout page={<Saved />} />,
  },
  {
    title: "Car Details Page",
    url: "/car-details/:id",
    page: <Layout page={<CarDetails />} />,
  },
  {
    title: "Payment Page",
    url: "/car-booking-payment",
    page: <Layout page={<Payment />} />,
  },
  {
    title: "Profile Page",
    url: "/profile",
    page: <Layout page={<Profile />} />,
  },
  {
    title: "Account Settings Page",
    url: "/account-settings",
    page: <Layout page={<AccountSettings />} />,
  },
];
