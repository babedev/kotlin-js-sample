package com.babedev

import org.w3c.dom.Element
import org.w3c.dom.Text
import kotlin.browser.document
import kotlin.dom.addClass

val kotlinRepo = "https://api.github.com/repos/jetbrains/kotlin"
val reactRepo = "https://api.github.com/repos/facebook/react"
val vueRepo = "https://api.github.com/repos/vuejs/vue"
val angularRepo = "https://api.github.com/repos/angular/angular"

val app = document.getElementById("app")
val kotlinBox = document.createElement("div")
val reactBox = document.createElement("div")
val vueBox = document.createElement("div")
val angularBox = document.createElement("div")

fun main(args: Array<String>) {
    renderKotlinBox()

    getInfo(kotlinRepo, { info -> renderInfo(info, kotlinBox) })
    getInfo(reactRepo, { info -> renderInfo(info, reactBox) })
    getInfo(vueRepo, { info -> renderInfo(info, vueBox) })
    getInfo(angularRepo, { info -> renderInfo(info, angularBox) })
}

fun renderKotlinBox() {
    val pageDiv = document.createElement("div")
    pageDiv.addClass("columns is-multiline is-tablet")

    arrayOf(kotlinBox, reactBox, vueBox, angularBox).forEachIndexed { i, box ->
        box.addClass("box")

        val boxDiv = document.createElement("div")
        boxDiv.addClass(if (i == 0) "column is-12-tablet" else "column is-4-tablet")
        boxDiv.appendChild(box)
        pageDiv.appendChild(boxDiv)
    }

    val section = document.createElement("section")
    section.addClass("section")
    section.appendChild(pageDiv)

    val container = document.createElement("div")
    container.addClass("container")
    container.appendChild(section)

    app?.appendChild(container)
}

fun renderInfo(info: Info, infoBox: Element) {
    val name = p(document.createTextNode(info.name.capitalize()))
    val desc = p(document.createTextNode(info.description))

    val logoDiv = document.createElement("div")
    logoDiv.addClass("media-left")
    logoDiv.appendChild(logo(info.owner.avatar_url))

    val contentDiv = document.createElement("div")
    contentDiv.addClass("media-content")
    contentDiv.appendChild(name)
    contentDiv.appendChild(desc)

    val article = document.createElement("article")
    article.addClass("media")
    article.appendChild(logoDiv)
    article.appendChild(contentDiv)

    val countBox = document.createElement("nav")
    countBox.addClass("level is-mobile")

    countBox.appendChild(count("Stars", info.stargazers_count))
    countBox.appendChild(count("Open Issues", info.open_issues))
    countBox.appendChild(count("Forks", info.forks_count))

    infoBox.appendChild(article)
    infoBox.appendChild(document.createElement("hr"))
    infoBox.appendChild(countBox)
}

fun p(child: Text): Element {
    val p = document.createElement("p")
    p.appendChild(child)
    return p
}

fun logo(src: String): Element {
    val logo = document.createElement("img")
    logo.setAttribute("src", src)
    logo.setAttribute("width", "64px")
    logo.setAttribute("height", "64px")

    return logo
}

fun count(title: String, count: Int): Element {
    val innerDiv = document.createElement("div")
    innerDiv.appendChild(p(document.createTextNode(title)))
    innerDiv.appendChild(p(document.createTextNode("$count")))

    val counterDiv = document.createElement("div")
    counterDiv.addClass("level-item has-text-centered")
    counterDiv.appendChild(innerDiv)

    return counterDiv
}
