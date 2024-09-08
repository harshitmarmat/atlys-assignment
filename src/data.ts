import avatar from "./assets/icons/avatar.svg"
import avatar2 from "./assets/icons/avatar2.svg"


export const post_data = [
  {
    id:"p1",
    author_name: "Theresa Webb",
    time: "5mins ago",
    author_image: avatar,
    post_message: {
      emoji: "👋",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    comments_count: 24,
  },
  {
    id:"p2",
    author_name: "Marvin McKinney",
    time: "19mins ago",
    author_image: avatar2,
    post_message: {
      emoji: "😞",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    comments_count: 14,
  },
  {
    id:"p3",
    author_name: "Theresa Webb",
    time: "5mins ago",
    author_image: avatar,
    post_message: {
      emoji: "👋",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    comments_count: 24,
  },
  {
    id:"p4",
    author_name: "Marvin McKinney",
    time: "19mins ago",
    author_image: avatar2,
    post_message: {
      emoji: "😞",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    comments_count: 14,
  },
  {
    id:"p5",
    author_name: "Theresa Webb",
    time: "5mins ago",
    author_image: avatar,
    post_message: {
      emoji: "👋",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    comments_count: 24,
  },
  {
    id:"p6",
    author_name: "Marvin McKinney",
    time: "19mins ago",
    author_image: avatar2,
    post_message: {
      emoji: "😞",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    comments_count: 14,
  },
];


export const home_header = {
  user_name : "Jane",
  sub_heading : "How are you doing today? Would you like to share something with the community 🤗"
}

export const login = {
  heading: "WELCOME BACK",
  sub_heading: "Log into your account",
};

export const footer_line = {
  text : "Not registered yet?",
  redirect_text : "Register →"
}



export const EMAILORUSERNAME = "emailOrUsername"
export const PASSWORD = "password"
export const GENERIC_ERROR = "This field cannot be empty"

export const EMAIL = "email"
export const USERNAME = "username"

export const EMAIL_ERROR= "Enter valid email"

export const CREATE_POST = "Create post"

export const signup = {
  heading: "SIGN UP",
  sub_heading: "Create an account to continue",
};

export const footer_line_signup = {
  text : "Already have an account?",
  redirect_text : "Login →"
}

export const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
 