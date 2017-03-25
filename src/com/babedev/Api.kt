package com.babedev

import org.w3c.xhr.XMLHttpRequest

fun getInfo(url: String, callback: (result: Info) -> Unit) {
    val xhr = XMLHttpRequest()
    xhr.onload = {
        callback(JSON.parse<Info>(xhr.responseText))
    }
    xhr.open("get", url)
    xhr.send()
}

data class Info(val id: Int = 0,
                val name: String = "",
                val description: String = "",
                val owner: Owner = Owner(),
                val stargazers_count: Int = 0,
                val open_issues: Int = 0,
                val forks_count: Int = 0)

data class Owner(val avatar_url: String = "")