(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{418:function(_,v,l){"use strict";l.r(v);var i=l(2),t=Object(i.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"网络分层"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#网络分层"}},[_._v("#")]),_._v(" 网络分层")]),_._v(" "),v("ol",[v("li",[_._v("OSI 模型： 应用层、会话层、表示层、传输层、网络层、数据链路层、物理层")]),_._v(" "),v("li",[_._v("TCP/IP 模型： 应用层、传输层、网络层、数据链路层、物理层")])]),_._v(" "),v("h1",{attrs:{id:"http-https-相关知识点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http-https-相关知识点"}},[_._v("#")]),_._v(" http https 相关知识点")]),_._v(" "),v("ol",[v("li",[v("p",[_._v("http协议是无状态、灵活 、无连接，存在于应用层")])]),_._v(" "),v("li",[v("p",[_._v("状态码分类")]),_._v(" "),v("ol",[v("li",[_._v("1xx  表示处理中的中间状态，需要后面进一步操作")]),_._v(" "),v("li",[_._v("2xx  成功")]),_._v(" "),v("li",[_._v("3xx  重定向\n"),v("ol",[v("li",[_._v("301 永久重定向")]),_._v(" "),v("li",[_._v("302 临时重定向")]),_._v(" "),v("li",[_._v("304 缓存重定向")])])]),_._v(" "),v("li",[_._v("4xx 客户端请求错误\n"),v("ol",[v("li",[_._v("400 笼统的客户端错误")]),_._v(" "),v("li",[_._v("401 请求凭证不对")]),_._v(" "),v("li",[_._v("403 服务器禁止访问资源")]),_._v(" "),v("li",[_._v("404 请求的资源未找到")]),_._v(" "),v("li",[_._v("405 请求方式不对")])])]),_._v(" "),v("li",[_._v("5xx 服务端错误\n"),v("ol",[v("li",[_._v("501 表示服务器不支持该请求方法")]),_._v(" "),v("li",[_._v("505 表示服务器不支持该http 版本")])])])])]),_._v(" "),v("li",[v("p",[_._v("缓存机制")]),_._v(" "),v("ol",[v("li",[_._v("流程：浏览器请求资源,判断是否有缓存信息，如果没有就请求服务器，如果有，就先判断是否明中强缓存，如果命中就获取缓存信息,若是没有，就请求服务器判断是否命中协商缓存，命中则就获取，没有命中就服务器传输资源")])])]),_._v(" "),v("li",[v("p",[_._v("强缓存 (请求响应头)")]),_._v(" "),v("ol",[v("li",[_._v("Cache-control")]),_._v(" "),v("li",[_._v("Expires 缺点： 服务器时间和浏览器时间会不一致")]),_._v(" "),v("li",[_._v("上述两者同时存在，就以Cache=control为准")])])]),_._v(" "),v("li",[v("p",[_._v("协商缓存 (请求响应头)")]),_._v(" "),v("ol",[v("li",[_._v("Last-Modified If-Modified-Since 表示资源修改时间 缺点是精度不够，只能到秒")]),_._v(" "),v("li",[_._v("Etag 和 If-None-Match 资源内容标识优先级高，")])])]),_._v(" "),v("li",[v("p",[_._v("request method")]),_._v(" "),v("ol",[v("li",[_._v("get: 会被缓存 有长度限制 （2048字符）  幂等 请求参数在url上")]),_._v(" "),v("li",[_._v("post: 不会被缓存 无限制 非幂等  请求体内")])])]),_._v(" "),v("li",[v("p",[_._v("HTTP/1.1 相⽐ HTTP/1.0 性能上的改进")]),_._v(" "),v("ol",[v("li",[_._v("使⽤ TCP ⻓连接的⽅式改善了 HTTP/1.0 短连接造成的性能开销")]),_._v(" "),v("li",[_._v("⽀持管道（pipeline）⽹络传输，只要第⼀个请求发出去了，不必等其回来，就可以发第⼆个请求出去，可以减少整体的响应时间")])])]),_._v(" "),v("li",[v("p",[_._v("HTTP/1.1 还是有性能瓶颈")]),_._v(" "),v("ol",[v("li",[_._v("请求 / 响应头部（Header）未经压缩就发送，⾸部信息越多延迟越⼤。只能压缩 Body 的部分；")]),_._v(" "),v("li",[_._v("发送冗⻓的⾸部。每次互相发送相同的⾸部造成的浪费较多；")]),_._v(" "),v("li",[_._v("服务器是按请求的顺序响应的，如果服务器响应慢，会招致客户端⼀直请求不到数据，也就是队头阻塞；")]),_._v(" "),v("li",[_._v("没有请求优先级控制；")]),_._v(" "),v("li",[_._v("请求只能从客户端开始，服务器只能被动响应。")])])]),_._v(" "),v("li",[v("p",[_._v("http 2.0 对于 1.1 优化")]),_._v(" "),v("ol",[v("li",[_._v("头部压缩")]),_._v(" "),v("li",[_._v("二进制格式")]),_._v(" "),v("li",[_._v("数据流")]),_._v(" "),v("li",[_._v("服务器推送")]),_._v(" "),v("li",[_._v("多路复用， "),v("b",[_._v("⼀个连接中并发多个请求或回应，⽽不⽤按照顺序⼀⼀对应 ")]),_._v(" 移除了 HTTP/1.1 中的串⾏请求，不需要排队等待，也就不会再出现「队头阻塞」问题，降低了延迟，⼤幅度提⾼了连接的利⽤率")]),_._v(" "),v("li",[_._v("1.1 的 请求是需要一一对应的，前面的请求没处理好，后面的就得等待")])])]),_._v(" "),v("li",[v("p",[_._v("https大致就是加一层SSL,由之前HTTP先和SSL通信，然后 SSL(SSL 和 TLS 是同一个东西的不同阶段) 和 TPC 通信")])])]),_._v(" "),v("h1",{attrs:{id:"tcp-udp-相关知识点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tcp-udp-相关知识点"}},[_._v("#")]),_._v(" TCP UDP 相关知识点")]),_._v(" "),v("ol",[v("li",[v("p",[_._v("三次握手")]),_._v(" "),v("ol",[v("li",[_._v("目的:是为了保证双方信息发送和接受的能力")]),_._v(" "),v("li",[_._v("过程\n"),v("ol",[v("li",[_._v("浏览器发送一个 SYN seq num = client_isn")]),_._v(" "),v("li",[_._v("Server 发送一个 SYN+ACK ,然后再 client_isn + 1，再补充一个 server_isn")]),_._v(" "),v("li",[_._v("Client 发送一个 ACK 和 server_isn + 1 ,这一步可以传输数据")])])])])]),_._v(" "),v("li",[v("p",[_._v("四次挥手")]),_._v(" "),v("ol",[v("li",[_._v("Client 发送一个FIN 为 1的报文，此时 Client 进入 FIN_WAIT_1")]),_._v(" "),v("li",[_._v("Server 发送一个 ACK 报文， Server 进入 CLOSE_WAIT 状态，当客户端收到ACK 报文之后，变为 FIN_WAIT_2")]),_._v(" "),v("li",[_._v("服务端处理完数据之后， Server  发送一个 FIN 报文，服务端进入LAST_ACK 状态")]),_._v(" "),v("li",[_._v("客户端收到服务端的 FIN 报文后， 回一个 ACK 应答报文，之后进入 TIME_WAIT 状态，服务端进入 CLOSED 状态")]),_._v(" "),v("li",[v("b",[_._v("关闭连接时，客户端向服务端发送 FIN 时，仅仅表示客户端不再发送数据了但是还能接收数据。服务器收到客户端的 FIN 报文时，先回⼀个 ACK 应答报⽂，⽽服务端可能还有数据需要处理和发送，等服务端不再发送数据时，才发送 FIN 报⽂给客户端来表示同意现在关闭连接")])])])]),_._v(" "),v("li",[v("p",[_._v("MSL")]),_._v(" "),v("blockquote",[v("p",[_._v("MSL 的意思是 "),v("b",[_._v("报文最大生存时间")])])])]),_._v(" "),v("li",[v("p",[_._v("TTL")]),_._v(" "),v("blockquote",[v("p",[_._v("报可以经过的最⼤路由数，每经过⼀个处理他的路由器此值就减 1，当此值为 0 则数据报将被丢弃")])])]),_._v(" "),v("li",[v("p",[_._v("二者区别：MSL 的单位是时间，⽽ TTL 是经过路由跳数。所以 MSL 应该要⼤于等于 TTL 消耗为 0 的时间，以确保报⽂已被⾃然消亡")])]),_._v(" "),v("li",[v("p",[_._v("客户端为什么要等待2MSL")]),_._v(" "),v("blockquote",[v("p",[_._v("⽹络中可能存在来⾃发送⽅的数据包，当这些发送⽅的数据包被接收⽅处理后⼜会向对⽅发送响应，所以⼀来⼀回需要等待 2 倍的时间。")])])]),_._v(" "),v("li",[v("p",[_._v("TCP")]),_._v(" "),v("ol",[v("li",[_._v("面向链接 ———— 一定是一对一")]),_._v(" "),v("li",[_._v("可靠的 ———— ⽆论的⽹络链路中出现了怎样的链路变化，TCP 都可以保证⼀个报⽂⼀定能够到达接收端")]),_._v(" "),v("li",[_._v("字节流 ———— 消息是「没有边界」的，所以⽆论我们消息有多⼤都可以进⾏传输。并且消息是「有序的」，当「前⼀个」消息没有收到的时候，即使它先收到了后⾯的字节，那么也不能扔给应⽤层去处理，同时对「重复」的报⽂会⾃动丢弃")])])]),_._v(" "),v("li",[v("p",[_._v("UDP")]),_._v(" "),v("ol",[v("li",[_._v("无需链接就可以传输")]),_._v(" "),v("li",[_._v("不可靠的")]),_._v(" "),v("li",[_._v("传输方式是一个包一个包发送的，会有丢失")])])]),_._v(" "),v("li",[v("p",[_._v("使用场景")]),_._v(" "),v("ol",[v("li",[_._v("TCP: FTP文件传输、http/https")]),_._v(" "),v("li",[_._v("UDP: 包总数小的通信")])])]),_._v(" "),v("li",[v("p",[_._v("1 ~ 9 来自于 "),v("a",{attrs:{href:"https://xiaolincoding.com/",target:"_blank",rel:"noopener noreferrer"}},[_._v("小林Coding"),v("OutboundLink")],1)])])])])}),[],!1,null,null,null);v.default=t.exports}}]);