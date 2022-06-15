// File: /packages/my-first-theme/src/components/index.js

import React from "react"
import { connect } from "frontity"

import Link from "@frontity/components/link"
import Switch from "@frontity/components/switch"

import List from "./list"
import Post from "./post"
import Page from "./page"

const Root = ({state}) => {
  const data = state.source.get(state.router.link)
  return (
    <>
      <h1>Buyxpress</h1>
      <p>Current URL: {state.router.link} </p>
      <nav>
        <Link link="/" target="_self">Home</Link>
        <br />
        <Link link="/page/2" target="_self">More Posts</Link>
        <br />
        <Link link="/about-us" target="_self">About Us</Link>
        <br />
      </nav>
      <hr />

      <main>
        <Switch>
         {/* Esta línea la estoy comentando para probar con una nueva 
         <div when={data.isArchive}>This is a list</div> */}
         <List when={data.isArchive} />
         {/* Comento las dos l+ineas de abajo cuando aplico el post */}
         {/* <div when={data.isPost}>This is a post</div>
         <div when={data.isPage}>This is a page</div> */}
         <Post when={data.isPost} />
         <Page when={data.isPage} />
        </Switch>
      </main>
    </>
  )
}

export default connect(Root)