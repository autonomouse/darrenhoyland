import React from "react"

// utils
import Layout from "../components/layout"

// Components
import Categories from "../components/categories"
import Tags from "../components/tags"


const MainPage = ({ data }) => {
  return (
    <Layout>
        <Categories />
        <Tags />
    </Layout>
  )
}

export default MainPage
