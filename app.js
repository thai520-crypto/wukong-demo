/* 悟空外卖 · 印尼悟空 手机演示。数据来自 data.js（MERCHANTS / DEALS / CATALOG）。不接真实支付。 */

const SERVICES = [
  { id: "food", name: "美食", icon: "food" },
  { id: "mart", name: "超市便利", icon: "mart" },
  { id: "dine", name: "到店团购", icon: "dine" },
  { id: "fruit", name: "水果生鲜", icon: "fruit" },
  { id: "vip", name: "VIP会员", icon: "vip" },
  { id: "home", name: "家政按摩", icon: "home" },
  { id: "topup", name: "话费充值", icon: "topup" },
  { id: "trip", name: "旅游", icon: "trip" },
  { id: "ride", name: "即时叫车", icon: "ride" },
  { id: "free", name: "免配专区", icon: "free" },
  { id: "visa", name: "签证", icon: "visa" },
  { id: "med", name: "医疗", icon: "med" },
  { id: "rent", name: "租车", icon: "rent" },
  { id: "stay", name: "民宿", icon: "stay" },
  { id: "wallet", name: "悟空钱包", icon: "wallet" },
];
const SCENE_OF = {
  mart: "static/scenes/mart.jpg", trip: "static/scenes/trip.jpg", rent: "static/scenes/rent.jpg",
  ride: "static/scenes/ride.jpg", visa: "static/scenes/visa.jpg", med: "static/scenes/med.jpg",
  home: "static/scenes/home.jpg", fruit: "static/items/f2.jpg", topup: "static/banners/recharge.jpg",
  stay: "static/items/s2.jpg",
};
const QUICK = [
  ["配送费减免", "free"], ["特价大餐", "deal"], ["上门保洁", "home"], ["巴厘按摩", "home"], ["签证协助", "visa"],
];
const PAYS = [
  { id: "wallet", name: "悟空余额", note: "可用 Rp 480.800", bg: "linear-gradient(135deg,#ff6a3a,#ff4322)", mark: "悟" },
  { id: "wechat", name: "微信支付", note: "中国账户 · 人民币结算", bg: "#07c160", mark: "微" },
  { id: "alipay", name: "支付宝", note: "中国账户 · 人民币结算", bg: "#1677ff", mark: "支" },
  { id: "qris", name: "QRIS", note: "印尼银行与电子钱包扫码", bg: "#1f1a17", mark: "QR" },
  { id: "gopay", name: "GoPay", note: "印尼电子钱包", bg: "#00aa13", mark: "G" },
  { id: "ovo", name: "OVO", note: "印尼电子钱包", bg: "#4c2a86", mark: "O" },
  { id: "dana", name: "DANA", note: "印尼电子钱包", bg: "#108ee9", mark: "D" },
  { id: "va", name: "银行转账 VA", note: "BCA / Mandiri / BNI / BRI", bg: "#0a5bd3", mark: "VA" },
  { id: "cod", name: "货到付款", note: "现金交给骑手", bg: "#8a8580", mark: "现" },
];
const ADDRESSES = [
  { id: "a1", name: "Casa Grande Residence Tower Montreal 12F", sub: "Kota Kasablanka, Jakarta Selatan 12870", tag: "家" },
  { id: "a2", name: "Grand Indonesia West Mall Lt. 3", sub: "Jl. M.H. Thamrin No. 1, Jakarta Pusat 10310", tag: "公司" },
  { id: "a3", name: "Senayan Residence Tower 2 No. 1808", sub: "Jl. Patal Senayan, Jakarta Selatan 12210" },
  { id: "a4", name: "Ruko Kemang Raya No. 12", sub: "Kemang, Jakarta Selatan 12730" },
];
const SUGGESTED = ["Grand Indonesia", "PIK Avenue", "Kota Kasablanka", "Glodok 唐人街", "Senayan City", "SCBD Pacific Place", "Kelapa Gading Mall", "Ancol 海滨"];
const CUISINE_ORDER = ["主食", "热菜", "海鲜", "烧烤", "火锅", "汤面", "凉菜", "点心", "甜品", "饮品"];
const REVIEW_NAMES = ["Li**", "Wang**", "陈**", "Jes**", "Ade**", "黄**", "Ru**", "Fit**"];
const REVIEW_TEXTS = [
  "味道很正，和国内一样。配送也快，骑手很有礼貌。",
  "姜葱酱绝了，连续点了一周。",
  "分量足，两个人吃一份套餐刚好。包装结实没有洒。",
  "老板会说中文，备注少辣真的做到了。",
  "晚上十点还能点到热乎的，雅加达难得。",
  "价格比到店吃便宜，用了首单券更划算。",
  "汤是现熬的，不是料包味。",
  "朋友推荐的，没失望。下次试试烤鸭。",
];
const ICON = {
  home: '<svg viewBox="0 0 24 24"><path d="M3.5 11 12 4l8.5 7"/><path d="M5.5 10v10h13V10"/><path d="M10 20v-6h4v6"/></svg>',
  dine: '<svg viewBox="0 0 24 24"><path d="M4 9.5 5.2 5h13.6L20 9.5"/><path d="M4 9.5a2.7 2.7 0 0 0 5.3 0 2.7 2.7 0 0 0 5.4 0 2.7 2.7 0 0 0 5.3 0"/><path d="M5.5 12.5V20h13v-7.5"/><path d="M10 20v-4.5h4V20"/></svg>',
  msgs: '<svg viewBox="0 0 24 24"><path d="M4 5.5h16v10.5H9l-4.5 3.5V16H4z"/><path d="M8 9h8M8 12.5h5"/></svg>',
  me: '<svg viewBox="0 0 24 24"><circle cx="12" cy="8.5" r="3.8"/><path d="M4.5 20.5a7.5 7.5 0 0 1 15 0"/></svg>',
  back: '<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>',
  search: '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="6.5"/><path d="m20 20-4.3-4.3"/></svg>',
  heart: '<svg viewBox="0 0 24 24"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/></svg>',
  share: '<svg viewBox="0 0 24 24"><path d="M4 12v7h16v-7"/><path d="M12 15V4m-4 4 4-4 4 4"/></svg>',
};

const M = () => (typeof MERCHANTS === "undefined" ? [] : MERCHANTS);
const D = () => (typeof DEALS === "undefined" ? [] : DEALS);
const C = () => (typeof CATALOG === "undefined" ? {} : CATALOG);

const state = {
  tab: "home",
  view: "home",
  hist: [],
  cart: {},
  pay: "wechat",
  toast: "",
  service: null,
  merchant: null,
  item: null,
  cuisine: "全部",
  listTab: "rec",
  dealChip: "全部",
  orderTab: "全部",
  shopTab: "menu",
  sec: 0,
  address: ADDRESSES[0],
  balance: 480800,
  points: 1054657,
  orders: [],
  last: "",
};

const fmt = (n) => Math.round(n).toLocaleString("id-ID");
const rp = (n) => "Rp " + fmt(n);
const rpTag = (n) => `<span class="price"><small>Rp</small>${fmt(n)}</span>`;
const esc = (s) => String(s).replace(/"/g, "&quot;");
const allItems = () => [
  ...M().flatMap((m) => m.products),
  ...D(),
  ...Object.values(C()).flatMap((c) => c.items),
];
const findItem = (id) => allItems().find((x) => x.id === id);
const findShop = (id) => M().find((m) => m.id === id);
const cartCount = () => Object.values(state.cart).reduce((a, b) => a + b, 0);
const cartTotal = () => Object.entries(state.cart).reduce((s, [id, n]) => s + (findItem(id) || { price: 0 }).price * n, 0);
const cartShops = () => [...new Set(Object.keys(state.cart).map(shopOfItem).filter(Boolean))];
const shopOfItem = (id) => (/^s\d{3}p\d{2}$/.test(id) ? id.slice(0, 4) : null);
const deliveryFee = () => cartShops().reduce((s, sid) => s + (findShop(sid) || { fee: 0 }).fee, 0);
const stars = (v) => "★".repeat(Math.round(v)) + "☆".repeat(5 - Math.round(v));

function seedOrders() {
  const a = findShop("s006");
  const b = findShop("s001");
  if (!a || !b) return;
  state.orders = [
    {
      id: "WK26102009", shopId: a.id, shop: a.name, status: "进行中", stText: "骑手已接单",
      items: a.products.slice(0, 2).map((p, i) => ({ name: p.name, img: p.img, n: 6 + i * 0 })),
      count: 12, total: 465000, pay: "悟空余额", at: "2026-10-20 09:58:46", deliver: "平台配送",
    },
    {
      id: "WK26101919", shopId: b.id, shop: b.name, status: "已完成", stText: "已送达",
      items: b.products.slice(2, 5).map((p) => ({ name: p.name, img: p.img, n: 1 })),
      count: 3, total: 128000, pay: "微信支付", at: "2026-10-19 19:12:08", deliver: "平台配送", reviewed: false,
    },
  ];
}

function toast(msg) {
  state.toast = msg;
  render();
  setTimeout(() => {
    if (state.toast === msg) {
      state.toast = "";
      render();
    }
  }, 1600);
}

function snapshot() {
  const { view, tab, service, merchant, item, shopTab, orderTab } = state;
  return { view, tab, service, merchant, item, shopTab, orderTab };
}
function go(view, tab) {
  state.hist.push(snapshot());
  if (state.hist.length > 40) state.hist.shift();
  state.view = view;
  if (tab) state.tab = tab;
  render();
  window.scrollTo(0, 0);
}
function switchTab(id) {
  state.hist = [];
  state.view = id;
  state.tab = id;
  render();
  window.scrollTo(0, 0);
}
function back() {
  const s = state.hist.pop();
  if (s) Object.assign(state, s);
  else {
    state.view = "home";
    state.tab = "home";
  }
  render();
  window.scrollTo(0, 0);
}
function openService(id) {
  if (id === "dine") return switchTab("dine");
  if (id === "food") return go("food", "home");
  if (id === "deal") {
    state.listTab = "deal";
    return switchTab("home");
  }
  state.service = id;
  go("svc", state.tab);
}
function openShop(id) {
  state.merchant = id;
  state.shopTab = "menu";
  state.sec = 0;
  go("shop");
}

function add(id) {
  state.cart[id] = (state.cart[id] || 0) + 1;
  toast("已加入购物车");
}
function setQty(id, d) {
  const n = (state.cart[id] || 0) + d;
  if (n <= 0) delete state.cart[id];
  else state.cart[id] = n;
  render();
}
function placeOrder() {
  if (!cartCount()) return;
  const ids = Object.keys(state.cart);
  const first = findItem(ids[0]);
  const sid = shopOfItem(ids[0]);
  const shop = sid ? findShop(sid) : null;
  const id = "WK" + Date.now().toString().slice(-8);
  const total = cartTotal() + deliveryFee();
  const payName = PAYS.find((p) => p.id === state.pay).name;
  if (state.pay === "wallet") state.balance = Math.max(0, state.balance - total);
  state.orders.unshift({
    id,
    shopId: shop ? shop.id : null,
    shop: shop ? shop.name : first.shop || "悟空服务",
    status: "进行中",
    stText: shop ? "商家接单中" : "服务已预约",
    items: ids.map((x) => {
      const it = findItem(x);
      return { name: it.name, img: it.img, n: state.cart[x] };
    }),
    count: cartCount(),
    total,
    pay: payName,
    at: new Date().toLocaleString("zh-CN", { hour12: false }).replace(/\//g, "-"),
    deliver: shop ? "平台配送" : "到店 / 上门",
  });
  state.cart = {};
  state.last = id;
  state.hist = [];
  state.view = "done";
  state.tab = "me";
  render();
  window.scrollTo(0, 0);
}

/* ---------- shared pieces ---------- */
function nav() {
  const items = [["home", "首页"], ["dine", "到店团购"], ["msgs", "消息"], ["me", "我的"]];
  return `<nav class="nav">${items
    .map(([id, name]) => `<button class="${state.tab === id ? "on" : ""}" data-tab-go="${id}">${ICON[id]}${name}${
      id === "msgs" ? '<span class="n-badge">8</span>' : ""
    }</button>`)
    .join("")}</nav>`;
}
function bar(title, extra = "") {
  return `<div class="bar"><button class="icon-btn" data-go="back">${ICON.back}</button><h1>${title}</h1>${extra}</div>`;
}
function tile(s) {
  return `<button class="tile" data-svc="${s.id}"><img src="static/icons/${s.icon}.jpg" alt="" onerror="this.src='static/logo.jpg'"><b>${s.name}</b></button>`;
}
function merchantCard(m) {
  return `<button class="mcard" data-merch="${m.id}">
    <div class="logo"><img src="${m.cover}" alt="" loading="lazy">${m.exclusive ? '<span class="ribbon">独家</span>' : ""}</div>
    <div class="info">
      <div class="name">${m.chain ? '<span class="chain">连锁</span>' : ""}${m.brand ? '<span class="brandtag">品牌</span>' : ""}<span>${m.name}</span></div>
      <div class="meta"><span class="star">★ ${m.score}</span><i class="sep"></i><span>月销 ${m.sales}+</span></div>
      <div class="fee">${m.fee ? `<span>配送费 ${rp(m.fee)} 起</span>` : '<span class="free">免配送费</span>'}<span>${m.mins}min</span><span>≈${m.dist}km</span></div>
      <div class="chipline"><span class="tagline">${m.tagline}</span></div>
      <div class="chipline">${m.promos.map((p) => `<span class="promo-chip">${p}</span>`).join("")}</div>
    </div>
    <span class="badge-send">悟空专送</span>
  </button>`;
}
function cartBar(lift) {
  const n = cartCount();
  const total = cartTotal();
  const shop = state.view === "shop" ? findShop(state.merchant) : null;
  const min = shop ? shop.minOrder : 0;
  const fee = shop ? shop.fee : deliveryFee();
  let btn = `<button class="go off">${rp(min)} 起送</button>`;
  if (n) {
    btn = total >= min
      ? `<button class="go" data-go="cart">去结算</button>`
      : `<button class="go off">差 ${rp(min - total)} 起送</button>`;
  }
  return `<div style="height:${lift ? 72 : 84}px"></div><div class="cart-bar ${lift ? "lift" : ""}"><div class="inner">
    <div class="cart-ic"><img src="static/logo.jpg" alt="">${n ? `<span class="n">${n}</span>` : ""}</div>
    <div class="tx">${n
      ? `<b>${rp(total)}</b><small>${fee ? "另需配送费 " + rp(fee) : "免配送费"} · 已选 ${n} 件</small>`
      : `<b style="color:#b5afaa;font-weight:500">未选中商品</b><small>（含配送费、打包费）</small>`}</div>
    ${btn}
  </div></div>`;
}
function qtyCtl(id) {
  const n = state.cart[id] || 0;
  if (!n) return `<button class="plus" data-add="${id}">+</button>`;
  return `<div class="qty"><button class="dec" data-qty="${id}" data-d="-1">−</button><b>${n}</b><button class="inc" data-qty="${id}" data-d="1">+</button></div>`;
}

/* ---------- home ---------- */
function filteredList() {
  const all = M();
  if (state.listTab === "deal") return all.filter((m) => m.products.some((p) => p.price <= 29000));
  if (state.listTab === "free") return all.filter((m) => m.fee === 0);
  if (state.listTab === "dist") return [...all].sort((a, b) => a.dist - b.dist);
  return all;
}
function home() {
  const list = filteredList();
  const active = state.orders.find((o) => o.status === "进行中");
  const activeShop = active && findShop(active.shopId);
  const lunch = M().slice(0, 10).map((m, i) => ({ m, p: m.products[(i * 5) % 32] }));
  return `<section class="screen">
    <header class="hd">
      <button class="addr" data-go="address"><span class="pin">📍</span><span class="txt">雅加达 | ${state.address.name}</span><span class="caret">▾</span></button>
      <div class="search-bar" data-go="food"><span>琼州鸡饭 · 海南鸡饭 Rp 29.000 起</span><i>⌕</i></div>
    </header>
    <div class="body">
      <div class="svc-card">
        <div class="svc-pages hide-scroll" style="display:flex;overflow-x:auto;scroll-snap-type:x mandatory">
          <div class="grid5" style="flex:0 0 100%;scroll-snap-align:start">${SERVICES.slice(0, 10).map(tile).join("")}</div>
          <div class="grid5" style="flex:0 0 100%;scroll-snap-align:start">${SERVICES.slice(10).map(tile).join("")}</div>
        </div>
        <div class="dots"><i class="on"></i><i></i></div>
      </div>
      <div class="quick hide-scroll">${QUICK.map(([n, s], i) => `<button data-svc="${s}"><em>${["折", "惠", "洁", "按", "签"][i]}</em>${n}</button>`).join("")}</div>
      <div class="banner" data-svc="wallet">
        <img src="static/banners/recharge.jpg" alt="" onerror="this.remove()">
        <div class="cap"><b class="y">充值送大红包</b><small>充 Rp 500.000 送 Rp 50.000<br>悟空钱包 · 持牌机构托管</small></div>
      </div>
      <div class="promo2">
        <div class="banner big" data-svc="mart"><img src="static/banners/mart.jpg" alt="" onerror="this.remove()"><div class="cap"><b>精选好物</b><small>华人超市 · 当日达</small></div></div>
        <div class="col">
          <div class="banner" data-svc="deal"><img src="static/banners/deal99.jpg" alt="" onerror="this.remove()"><div class="cap"><b class="y">Rp 29K</b><small>特价大餐 · 吃饱吃好</small></div></div>
          <div class="banner" data-svc="dine"><img src="static/banners/deal150.jpg" alt="" onerror="this.remove()"><div class="cap"><b>团购 7 折</b><small>到店吃更划算</small></div></div>
        </div>
      </div>
      <div class="sec"><h3>雅加达午餐推荐</h3><button data-go="food">更多 ›</button></div>
      <div class="hcards hide-scroll">${lunch.map(({ m, p }) => `<div class="hcard">
        <div class="ph" data-merch="${m.id}"><img src="${p.img}" alt="" loading="lazy"><span class="tag">${m.name} · ${m.cuisine}</span></div>
        <div class="tx"><b>${p.name}</b><div class="between">${rpTag(p.price)}<button class="plus" data-add="${p.id}">+</button></div></div>
      </div>`).join("")}</div>
      <div class="ltabs">
        <button class="${state.listTab === "rec" ? "on" : ""}" data-list="rec">推荐</button>
        <button class="flag a ${state.listTab === "deal" ? "on" : ""}" data-list="deal">特优 Rp29K</button>
        <button class="flag b ${state.listTab === "free" ? "on" : ""}" data-list="free">免配 专区⁺</button>
        <span class="sp"></span>
        <button class="${state.listTab === "dist" ? "on" : ""}" data-list="dist">距离</button>
      </div>
      <div class="mlist">${list.map(merchantCard).join("")}</div>
      <p class="count-note">${list.length} 家商家 · 每家 32 道菜 · 已显示全部</p>
    </div>
    ${active ? `<button class="pickup" data-go="orders"><img src="${activeShop ? activeShop.cover : "static/logo.jpg"}" alt=""><span>取餐中</span></button>` : ""}
    ${cartCount() ? cartBar(true) : ""}
  </section>`;
}

/* ---------- all restaurants ---------- */
function foodList() {
  const cuisines = ["全部", ...new Set(M().map((m) => m.cuisine))];
  const list = state.cuisine === "全部" ? M() : M().filter((m) => m.cuisine === state.cuisine);
  return `<section class="screen no-nav">
    ${bar("全部餐厅")}
    <div class="quick hide-scroll" style="padding-top:10px">${cuisines
      .map((c) => `<button data-cuisine="${c}" style="${state.cuisine === c ? "background:#1f1a17;color:#fff" : ""}">${c}</button>`)
      .join("")}</div>
    <div class="mlist" style="padding-top:12px">${list.map(merchantCard).join("")}</div>
    <p class="count-note">${list.length} 家餐厅</p>
    ${cartCount() ? cartBar(false) : ""}
  </section>`;
}

/* ---------- shop ---------- */
function shopSections(m) {
  const ps = m.products;
  const secs = [{ name: "店铺招牌", items: ps.slice(0, 4) }, { name: "热销", items: ps.slice(4, 8) }];
  const rest = ps.slice(8);
  CUISINE_ORDER.forEach((c) => {
    const it = rest.filter((p) => p.cat === c);
    if (it.length) secs.push({ name: c, items: it });
  });
  return secs;
}
function itemRow(p) {
  return `<div class="item">
    <img src="${p.img}" alt="" loading="lazy" data-item="${p.id}">
    <div class="t"><div data-item="${p.id}"><b>${p.name}</b><br><small>月销 ${p.sold} | 库存充足</small></div>
      <div class="between">${rpTag(p.price)}${qtyCtl(p.id)}</div></div>
  </div>`;
}
function shopReviews(m) {
  const idx = Number(m.id.slice(1));
  return `<div style="background:#fff">${[0, 1, 2, 3, 4, 5].map((k) => {
    const name = REVIEW_NAMES[(idx + k) % REVIEW_NAMES.length];
    const text = REVIEW_TEXTS[(idx * 3 + k) % REVIEW_TEXTS.length];
    const sc = 5 - (k % 3 === 2 ? 1 : 0);
    const pics = k % 2 ? m.products.slice(k, k + 2).map((p) => `<img src="${p.img}" alt="">`).join("") : "";
    return `<div class="review"><div class="av">${name[0]}</div><div class="t">
      <div class="between"><b>${name}</b><small>2026-10-${String(18 - k).padStart(2, "0")}</small></div>
      <div class="stars"><span class="s">${stars(sc)}</span><small class="muted">${m.products[k].name}</small></div>
      <p>${text}</p>${pics ? `<div class="pics">${pics}</div>` : ""}</div></div>`;
  }).join("")}<p class="count-note">共 ${m.reviews} 条评价</p></div>`;
}
function shopInfo(m) {
  return `<div style="background:#fff">
    <div class="info-row"><span class="ic">📍</span><span>${m.addr}</span></div>
    <div class="info-row"><span class="ic">🛵</span><span>配送服务：悟空专送 · 约 ${m.mins} 分钟</span></div>
    <div class="info-row"><span class="ic">🕙</span><span>营业时间：${m.hours}</span></div>
    <div class="info-row"><span class="ic">📄</span><span>食品许可和商家实景</span></div>
    <div class="info-pics"><img src="${m.cover}" alt=""><img src="${m.products[0].img}" alt=""><img src="${m.products[9].img}" alt=""></div>
    <div class="info-row"><span class="ic">💬</span><button data-toast="演示环境，商家电话在正式版显示" style="color:#ff4d2a;font-weight:600">联系商家</button></div>
  </div>`;
}
function shopView() {
  const m = findShop(state.merchant) || M()[0];
  if (!m) return home();
  const secs = shopSections(m);
  let body = "";
  if (state.shopTab === "menu") {
    body = `<div class="menu-wrap">
      <div class="side">${secs.map((s, i) => `<button class="${state.sec === i ? "on" : ""}" data-sec="${i}">${s.name}</button>`).join("")}</div>
      <div class="items">${secs.map((s, i) => `<h4 id="sec-${i}">${s.name}</h4>${s.items.map(itemRow).join("")}`).join("")}</div>
    </div>`;
  } else if (state.shopTab === "reviews") body = shopReviews(m);
  else body = shopInfo(m);
  return `<section class="screen no-nav">
    <div class="shop-cover"><img src="${m.cover}" alt="">
      <div class="tools"><button data-go="back">${ICON.back}</button><span class="sp"></span><button data-toast="搜索本店菜品">${ICON.search}</button><button data-toast="已收藏">${ICON.heart}</button><button data-toast="分享链接已复制">${ICON.share}</button></div>
    </div>
    <div class="shop-head">
      <div class="t"><h1>${m.name}</h1>
        <div class="meta"><span>月销 ${m.sales}+</span><span>· ${m.dist}km</span><span>· 平台配送 ${m.mins}min</span></div>
        <div class="stars"><span class="s">${stars(m.score)}</span><span class="v">${m.score}</span><span class="tagline">${m.tagline}</span></div>
      </div>
      <img class="lg" src="${m.cover}" alt="">
    </div>
    <div class="stabs">
      <button class="${state.shopTab === "menu" ? "on" : ""}" data-stab="menu">点菜</button>
      <button class="${state.shopTab === "reviews" ? "on" : ""}" data-stab="reviews">评价<small>${m.reviews}</small></button>
      <button class="${state.shopTab === "info" ? "on" : ""}" data-stab="info">商家</button>
    </div>
    ${body}
    ${cartBar(false)}
  </section>`;
}

/* ---------- product / service detail ---------- */
function detailView() {
  const it = findItem(state.item);
  if (!it) return back();
  const isDish = !!shopOfItem(it.id);
  const isDeal = /^g\d\d$/.test(it.id);
  const shop = isDish ? findShop(shopOfItem(it.id)) : isDeal ? findShop(it.shopId) : null;
  const cta = isDish ? "加入购物车" : isDeal ? "立即抢购" : "预约并加入结算";
  return `<section class="screen no-nav">
    <div class="hero-photo"><img src="${it.img}" alt=""><button class="back" data-go="back">‹</button></div>
    <div class="sheet">
      <h2>${it.name}</h2>
      <div class="muted" style="margin-top:4px">${it.en || it.kind || ""}${it.shop ? " · " + it.shop : ""}${it.area ? " · " + it.area : ""}</div>
      <div class="between" style="margin-top:10px"><span class="price" style="font-size:22px"><small>Rp</small>${fmt(it.price)}${it.orig ? `<span class="orig" style="color:#b8b2ac;text-decoration:line-through;font-size:12px;margin-left:6px;font-weight:500">Rp ${fmt(it.orig)}</span>` : ""}</span>
        <span class="muted">${it.unit || "1 份"}${it.sold ? " · 月销 " + it.sold : ""}${it.score ? " · ★ " + it.score : ""}</span></div>
      <p>${it.desc || ""}</p>
      ${shop ? `<div class="kv" style="border-top:1px solid #f0ecea;margin-top:8px"><span>商家</span><b data-merch="${shop.id}" style="color:#ff4d2a">${shop.name} ›</b></div>
      <div class="kv"><span>配送</span><b>${shop.fee ? "配送费 " + rp(shop.fee) : "免配送费"} · ${shop.mins} 分钟</b></div>` : ""}
      ${isDish ? "" : `<p class="sheet-note">${isDeal ? "到店出示订单二维码核销，不可用于外卖。" : "服务由持证供应商提供，平台负责预约与客服。"}</p>`}
    </div>
    <div class="fixed-cta"><button class="cta" data-add="${it.id}" data-after="${isDish ? "back" : "cart"}">${cta} · ${rp(it.price)}</button></div>
  </section>`;
}

/* ---------- cart / pay / done ---------- */
function cartView() {
  const rows = Object.keys(state.cart).map(findItem).filter(Boolean);
  if (!rows.length) {
    return `<section class="screen no-nav">${bar("购物车")}
      <div class="empty"><div class="box"></div>购物车是空的<br><button class="cta ghost" style="display:inline-block;width:auto;padding:10px 22px;margin-top:14px" data-tab-go="home">去逛逛</button></div></section>`;
  }
  const fee = deliveryFee();
  const pack = rows.filter((r) => shopOfItem(r.id)).length * 2000;
  return `<section class="screen no-nav">${bar("购物车")}
    <div class="card">${rows.map((f) => `<div class="line-item"><img src="${f.img}" alt="">
      <div class="t"><b>${f.name}</b><small>${f.shop || ""}</small><div class="price" style="margin-top:4px">${rp(f.price)}</div></div>
      <div class="qty"><button class="dec" data-qty="${f.id}" data-d="-1">−</button><b>${state.cart[f.id]}</b><button class="inc" data-qty="${f.id}" data-d="1">+</button></div></div>`).join("")}</div>
    <div class="card">
      <div class="kv"><span>商品合计</span><b>${rp(cartTotal())}</b></div>
      <div class="kv"><span>配送费</span><b>${fee ? rp(fee) : "免配送费"}</b></div>
      <div class="kv"><span>打包费</span><b>${rp(pack)}</b></div>
      <div class="kv" style="border-top:1px solid #f0ecea;font-size:15px"><span>应付</span><b class="price">${rp(cartTotal() + fee + pack)}</b></div>
    </div>
    <div class="fixed-cta"><button class="cta" data-go="pay">去结账 ${rp(cartTotal() + fee + pack)}</button></div>
  </section>`;
}
function payView() {
  const fee = deliveryFee();
  const pack = Object.keys(state.cart).filter(shopOfItem).length * 2000;
  const total = cartTotal() + fee + pack;
  return `<section class="screen no-nav">${bar("确认订单")}
    <button class="card" style="display:flex;gap:10px;width:calc(100% - 24px);align-items:center" data-go="address">
      <span style="font-size:20px">📍</span><div style="flex:1"><b style="font-size:15px">${state.address.name}</b><div class="muted">${state.address.sub} · 悟空行者 62-****1519</div></div><span class="chev">›</span>
    </button>
    <div class="card"><h3>订单摘要</h3>
      <div class="kv"><span>件数</span><b>${cartCount()}</b></div>
      <div class="kv"><span>配送时间</span><b>尽快送达 · 约 25–40 分钟</b></div>
      <div class="kv"><span>商品 + 配送 + 打包</span><b>${rp(total)}</b></div>
    </div>
    <div class="card"><h3>支付方式</h3>
      ${PAYS.map((p) => `<button class="pay-opt" style="width:100%" data-pay="${p.id}">
        <span class="lg" style="background:${p.bg}">${p.mark}</span>
        <span class="t"><b>${p.name}</b><small>${p.id === "wallet" ? "可用 " + rp(state.balance) : p.note}</small></span>
        <span class="radio ${state.pay === p.id ? "on" : ""}"></span></button>`).join("")}
      <p class="sheet-note">微信支付、支付宝走 2C2P 收单；QRIS 与本地钱包走 Xendit。演示不会真实扣款。</p>
    </div>
    <div class="fixed-cta"><button class="cta" data-order="1">确认支付 ${rp(total)}</button></div>
  </section>`;
}
function doneView() {
  const o = state.orders.find((x) => x.id === state.last) || state.orders[0];
  return `<section class="screen no-nav">
    <div class="ok-hero"><div class="big">✓</div><h2>支付成功</h2><p>订单 ${o ? o.id : ""} 已发给商家<br>手机演示，没有真实扣款</p></div>
    <button class="cta" data-go="orders">查看订单</button>
    <button class="cta ghost" data-tab-go="home">返回首页</button>
  </section>`;
}

/* ---------- orders ---------- */
const OTABS = ["全部", "等待付款", "进行中", "待评价", "已完成", "已退款"];
function ordersView() {
  const t = state.orderTab;
  const list = state.orders.filter((o) => {
    if (t === "全部") return true;
    if (t === "待评价") return o.status === "已完成" && !o.reviewed;
    return o.status === t;
  });
  return `<section class="screen no-nav">${bar("我的订单")}
    <div class="otabs hide-scroll">${OTABS.map((x) => `<button class="${t === x ? "on" : ""}" data-otab="${x}">${x}</button>`).join("")}</div>
    ${list.length ? list.map((o) => `<div class="ocard">
      <div class="between"><button class="shop" data-merch="${o.shopId || ""}">${o.shopId ? `<img src="${findShop(o.shopId).cover}" alt="">` : ""}${o.shop} ›</button><span class="st ${o.status === "进行中" ? "live" : ""}">${o.stText}</span></div>
      <div class="thumbs">${o.items.slice(0, 4).map((i) => `<div><img src="${i.img}" alt=""><small>${i.name}</small></div>`).join("")}</div>
      <div class="l">下单时间：${o.at}</div>
      <div class="l">数量：${o.count} 件 · ${o.pay}</div>
      <div class="paid"><span>实付：${rp(o.total)}</span><small>${o.deliver}</small></div>
      <div class="acts">${o.status === "进行中"
        ? `<button data-toast="骑手正在路上，约 18 分钟送达">查看进度</button><button class="pri" data-toast="演示环境，正式版可与骑手通话">联系骑手</button>`
        : o.status === "已完成"
          ? `<button data-merch="${o.shopId || ""}">再来一单</button>${o.reviewed ? "" : `<button class="pri" data-review="${o.id}">去评价</button>`}`
          : `<button class="pri" data-go="pay">去支付</button>`}</div>
    </div>`).join("")
      : `<div class="empty"><div class="box"></div>暂无数据</div>`}
  </section>`;
}

/* ---------- messages ---------- */
function msgsView() {
  const m0 = M()[0];
  const m2 = M()[2];
  const list = [
    { title: "订单群聊", prev: "[图片]", time: "2026-10-18 19:03", av: "💬", bg: "#e8f0ff", n: 8 },
    { title: "订单消息", prev: "外卖订单（单号 6728518）商家接单", time: "9 分钟前", av: "🧾", bg: "#e8f0ff" },
    { title: "账户通知", prev: "余额变动：支付订单（ID 6728518）", time: "11 分钟前", av: "👛", bg: "#fff4e0" },
    { title: "悟空外卖福利官", prev: "❤️ 悟空美食好想你！Rp 150.000 红包已到账", time: "2026-10-12 12:00", img: "static/logo.jpg" },
    { title: m0.name, prev: `${m0.name}红包已送达，独家优惠仅在悟空！`, time: "2026-08-29 10:00", img: m0.cover },
    { title: m2.name, prev: `${m2.name}红包已送达，独家优惠仅在悟空！`, time: "2026-06-27 10:00", img: m2.cover },
    { title: "悟空福利官", prev: "悟空外卖霸王餐开始啦！", time: "2026-05-10 16:00", img: "static/logo.jpg" },
    { title: "准时保", prev: "超时赔付：超过承诺时间自动赔红包", time: "2026-01-03 01:00", img: "static/logo.jpg" },
    { title: "悟空小助手", prev: "悟空外卖登陆雅加达！邀请新人下单得大红包", time: "2025-12-04 10:00", av: "🪙", bg: "#fff4e0" },
  ];
  return `<section class="screen">
    <div class="page-title"><h1>消息</h1><span class="pill-soft">⌂ 全部已读</span><span class="sp"></span><button class="link" data-toast="客服将在正式版开通">🎧 联系客服</button></div>
    ${list.map((x) => `<button class="msg" data-toast="演示环境，消息详情在正式版显示">
      <div class="av" style="background:${x.bg || "#fff"}">${x.img ? `<img src="${x.img}" alt="">` : x.av}${x.n ? `<span class="n">${x.n}</span>` : ""}</div>
      <div class="t"><div class="between"><b>${x.title}</b><small>${x.time}</small></div><p>${x.prev}</p></div>
    </button>`).join("")}
  </section>`;
}

/* ---------- me ---------- */
function meView() {
  const live = state.orders.filter((o) => o.status === "进行中").length;
  const toReview = state.orders.filter((o) => o.status === "已完成" && !o.reviewed).length;
  const pending = state.orders.filter((o) => o.status === "等待付款").length;
  return `<section class="screen">
    <div class="me-top">
      <img class="wm" src="static/logo.jpg" alt="">
      <div class="tools"><button data-toast="正式版支持简体中文 / Bahasa Indonesia / English">文 简体中文</button><button data-go="about">⚙</button></div>
      <div class="user"><img src="static/logo.jpg" alt=""><div><b>62-****1519</b><small>编辑</small></div></div>
      <div class="wallet">
        <div><div class="k">余额 (Rp)</div><div class="v">${fmt(state.balance)}</div></div>
        <div><div class="k">积分</div><div class="v">${fmt(state.points)}</div></div>
        <div class="wside"><span class="crown">👑</span><button data-svc="wallet">充值</button></div>
      </div>
      <div class="vipbar"><span>悟空龙珠卡</span><button data-svc="vip">立即开通</button></div>
    </div>
    <div class="menu">
      <button data-toast="红包卡券：3 张可用"><span class="ic">🧧</span>红包卡券<span class="sp"></span><span class="chev">›</span></button>
      <button data-svc="deal"><span class="ic">🏷️</span>优惠中心<span class="sp"></span><span class="chev">›</span></button>
      <button data-toast="邀请好友首单各得 Rp 20.000"><span class="ic">🎁</span>邀请有礼<span class="sp"></span><span class="chev">›</span></button>
      <button data-toast="今日任务：下 1 单得 200 积分"><span class="ic">✅</span>任务中心<span class="sp"></span><span class="chev">›</span></button>
    </div>
    <div class="menu">
      <div class="mh">我的订单</div>
      <button data-orders="全部"><span class="ic">📋</span>全部订单<span class="sp"></span><span class="chev">›</span></button>
      <button data-orders="等待付款"><span class="ic">💳</span>待付款<span class="sp"></span>${pending ? `<span class="cnt">${pending}</span>` : ""}<span class="chev">›</span></button>
      <button data-orders="进行中"><span class="ic">🕒</span>进行中<span class="sp"></span>${live ? `<span class="cnt">${live}</span>` : ""}<span class="chev">›</span></button>
      <button data-orders="待评价"><span class="ic">💬</span>待评价<span class="sp"></span>${toReview ? `<span class="cnt">${toReview}</span>` : ""}<span class="chev">›</span></button>
    </div>
    <div class="menu">
      <div class="mh gold">个人信息</div>
      <button data-go="address"><span class="ic">📍</span>收货地址<span class="sp"></span><span class="val">${state.address.tag || ""}</span><span class="chev">›</span></button>
      <button data-toast="默认支付：微信支付"><span class="ic">💰</span>支付设置<span class="sp"></span><span class="chev">›</span></button>
      <button data-toast="正式版支持简体中文 / Bahasa Indonesia / English"><span class="ic">🌐</span>语言<span class="sp"></span><span class="val">简体中文</span><span class="chev">›</span></button>
      <button data-toast="客服将在正式版开通"><span class="ic">🎧</span>联系客服<span class="sp"></span><span class="chev">›</span></button>
      <button data-go="about"><span class="ic">ℹ️</span>关于应用<span class="sp"></span><span class="chev">›</span></button>
    </div>
  </section>`;
}

/* ---------- dine / group buy ---------- */
function dineView() {
  const buffets = D().filter((d) => d.kind === "自助").slice(0, 4);
  const chip = state.dealChip;
  const map = { 团购套餐: "套餐", 代金券: "代金券", 在线预约: "自助" };
  const list = chip === "全部" ? D() : D().filter((d) => d.kind === map[chip]);
  const quotes = ["菜品丰富不限量，平价畅吃火锅自由！", "炭火现烤，牛舌和五花随便加。", "生蚝、大虾管够，晚餐人均不到二十万。", "包间可订，适合家庭聚会。"];
  return `<section class="screen">
    <div class="dtop"><div class="ttl">到店团购</div><div class="dsearch">⌕ 团购 · 代金券 · 订座</div></div>
    <div class="dgrid">${[["dine", "优质团购", "dine"], ["food", "悟空美食", "food"], ["dessert", "甜品下午茶", "dine"], ["wok", "小炒菜馆", "dine"], ["dinner", "优质晚餐", "dine"]]
      .map(([ic, n, go]) => `<button class="tile" data-svc="${go}"><img src="static/icons/${ic}.jpg" alt="" onerror="this.src='static/logo.jpg'"><b>${n}</b></button>`).join("")}</div>
    <div class="sec"><h3>省钱用团购<small>限时秒杀中</small></h3></div>
    <div class="dbanners hide-scroll">
      <div class="banner" data-chip="团购套餐"><img src="static/banners/dimsum.jpg" alt="" onerror="this.remove()"><div class="cap"><b>粤菜到店吃</b><small>低至 7 折 · 63 道菜任选</small></div></div>
      <div class="banner" data-chip="代金券"><img src="static/banners/duck.jpg" alt="" onerror="this.remove()"><div class="cap"><b class="y">招牌秒杀</b><small>Rp 200.000 代金券 Rp 176.000</small></div></div>
    </div>
    <div class="sec"><h3>优质自助餐<small>多人同行能省则省</small></h3></div>
    <div class="buffets hide-scroll">${buffets.map((d, i) => `<button class="bcard" data-item="${d.id}">
      <div class="ph"><img src="${d.img}" alt="" onerror="this.src='${findShop(d.shopId).cover}'"><span class="score">★ ${d.score}</span></div>
      <div class="tx"><b>${d.shop} · ${d.name}</b><small>雅加达 | 餐厅 · ${d.area}</small><q>${quotes[i % quotes.length]}</q></div>
    </button>`).join("")}</div>
    <div class="filters"><button>位置 ▾</button><button>全部分类 ▾</button><button>排序 ▾</button><button>筛选 ▾</button></div>
    <div class="chips">${["全部", "团购套餐", "代金券", "在线预约"].map((c) => `<button class="${chip === c ? "on" : ""}" data-chip="${c}">${c}</button>`).join("")}</div>
    ${list.map((d) => `<button class="deal" data-item="${d.id}">
      <img src="${d.img}" alt="" loading="lazy" onerror="this.src='${findShop(d.shopId).cover}'">
      <div class="t"><div class="shop"><em>${d.kind}</em>${d.shop} · ${d.area}</div><b>${d.name}</b>
        <div class="between"><span>${rpTag(d.price)}<span class="orig">Rp ${fmt(d.orig)}</span></span><span class="sold">已售 ${d.sold}</span></div></div>
    </button>`).join("")}
    <p class="count-note">${list.length} 个团购</p>
    ${cartCount() ? cartBar(true) : ""}
  </section>`;
}

/* ---------- service pages ---------- */
function offerRow(it) {
  return `<button class="offer" data-item="${it.id}">
    <img src="${it.img}" alt="" loading="lazy" onerror="this.src='static/logo.jpg'">
    <div class="t"><b>${it.name}</b><div class="sub">${it.shop}</div><div class="meta">★ ${it.score} · ${it.area} · ${it.unit}</div><div class="price">${rp(it.price)}</div></div>
    <span class="chev">›</span>
  </button>`;
}
function serviceView() {
  const id = state.service;
  if (id === "free") {
    const list = M().filter((m) => m.fee === 0);
    return `<section class="screen no-nav">${bar("免配专区")}
      <p class="lead" style="margin-top:10px">这些商家今天免配送费，下单满起送价即可。</p>
      <div class="mlist">${list.map(merchantCard).join("")}</div><p class="count-note">${list.length} 家免配送费</p>${cartCount() ? cartBar(false) : ""}</section>`;
  }
  if (id === "vip") {
    return `<section class="screen no-nav">${bar("VIP 会员")}
      <div class="vipcard"><div class="between"><b>悟空龙珠卡</b><span>WUKONG</span></div><div class="g">黑金会员</div><small>每月 8 张免配送券 · 全场 95 折 · 积分 1.5 倍</small></div>
      <div class="perks"><div class="perk"><div class="e">🛵</div><b>免配送</b><small>每月 8 次</small></div><div class="perk"><div class="e">🏷️</div><b>95 折</b><small>全场商家</small></div><div class="perk"><div class="e">⭐</div><b>1.5 倍积分</b><small>可兑红包</small></div></div>
      <div class="card"><div class="kv"><span>月卡</span><b>Rp 49.000 / 月</b></div><div class="kv"><span>年卡</span><b>Rp 399.000 / 年 · 送 2 个月</b></div></div>
      <div class="fixed-cta"><button class="cta" data-toast="演示环境，正式版可开通">立即开通 · Rp 49.000</button></div></section>`;
  }
  if (id === "wallet") {
    return `<section class="screen no-nav">${bar("悟空钱包")}
      <div class="wallet" style="margin-top:12px;border-radius:16px"><div><div class="k">余额 (Rp)</div><div class="v">${fmt(state.balance)}</div></div><div><div class="k">积分</div><div class="v">${fmt(state.points)}</div></div><span class="crown">👑</span></div>
      <div class="card"><h3>充值金额</h3>
        <div class="perks" style="padding:0;grid-template-columns:1fr 1fr">${[[100000, 5000], [200000, 15000], [500000, 50000], [1000000, 120000]].map(([a, g]) => `<button class="perk" data-toast="演示环境，正式版通过持牌支付机构充值"><b>${rp(a)}</b><small>送 ${rp(g)} 红包</small></button>`).join("")}</div>
        <p class="sheet-note">钱包资金由持牌机构托管，可用于全部商家与服务。</p></div>
      <div class="card"><h3>最近明细</h3>
        <div class="kv"><span>支付订单 WK26102009</span><b>- Rp 465.000</b></div><div class="kv"><span>充值送红包</span><b>+ Rp 50.000</b></div><div class="kv"><span>充值</span><b>+ Rp 500.000</b></div></div></section>`;
  }
  const cat = C()[id];
  if (!cat) return home();
  return `<section class="screen no-nav">${bar(cat.name)}
    <div class="scene"><img src="${SCENE_OF[id] || "static/scenes/hero.jpg"}" alt="" onerror="this.remove()"><div class="cap"><b>${cat.name}</b><small>${cat.lead}</small></div></div>
    <div class="offers">${cat.items.map(offerRow).join("")}</div>
    ${cartCount() ? cartBar(false) : ""}
  </section>`;
}

/* ---------- address ---------- */
function addressView() {
  return `<section class="screen no-nav">${bar("选择地址")}
    <div class="addr-search"><span class="city">📍 雅加达 ▾</span><span class="in">⌕ 请输入收货地址</span></div>
    <div class="addr-sec"><span>目前位置</span><button data-toast="已重新定位">重新定位 ⊕</button></div>
    <div class="addr-list"><button data-toast="已使用当前定位"><span class="pin">◎</span><span>15336, Tangerang Selatan, Banten, Indonesia</span></button></div>
    <div class="addr-sec"><span>您的地址</span><button data-toast="演示环境，正式版可新增地址">添加收货地址 ⊕</button></div>
    <div class="addr-list">${ADDRESSES.map((a) => `<button class="${state.address.id === a.id ? "on" : ""}" data-addr="${a.id}"><span class="pin">⌂</span><span>${a.name}${a.tag ? ` <span class="pill-soft">${a.tag}</span>` : ""}<small>${a.sub}</small></span></button>`).join("")}</div>
    <div class="addr-sec"><span>推荐地址</span></div>
    <div class="addr-list">${SUGGESTED.map((s) => `<button data-toast="已选择 ${s}"><span class="pin">⌖</span><span>${s}</span></button>`).join("")}</div>
    <div class="fixed-cta"><button class="cta" data-toast="演示环境，正式版可新增地址">添加收货地址</button></div>
  </section>`;
}

function aboutView() {
  return `<section class="screen no-nav">${bar("关于应用")}
    <div class="card" style="text-align:center"><img src="static/logo.jpg" alt="" style="width:84px;height:84px;border-radius:22px;margin:6px auto 10px"><h3>悟空外卖 · 印尼悟空</h3>
      <p class="muted">面向在印尼的中文用户的一站式生活服务：外卖、超市、到店团购、旅游、到家服务、钱包与会员。界面为简体中文，价格为印尼盾。</p></div>
    <div class="card"><div class="kv"><span>运营主体</span><b>WUKONG TEKNOLOGI NUSANTARA</b></div><div class="kv"><span>演示城市</span><b>雅加达</b></div><div class="kv"><span>版本</span><b>演示版 0.3</b></div></div>
    <p class="sheet-note" style="margin:0 16px">这是可在 iPhone Safari 打开的演示，不是应用商店正式版，不发生真实扣款。</p>
  </section>`;
}

/* ---------- router ---------- */
function screen() {
  switch (state.view) {
    case "food": return foodList();
    case "shop": return shopView();
    case "detail": return detailView();
    case "cart": return cartView();
    case "pay": return payView();
    case "done": return doneView();
    case "orders": return ordersView();
    case "svc": return serviceView();
    case "address": return addressView();
    case "about": return aboutView();
    case "dine": return dineView();
    case "msgs": return msgsView();
    case "me": return meView();
    default: return home();
  }
}
const NAV_VIEWS = ["home", "dine", "msgs", "me"];

function render() {
  const y = window.scrollY;
  const html = screen();
  if (typeof html !== "string") return;
  document.getElementById("app").innerHTML =
    html + (NAV_VIEWS.includes(state.view) ? nav() : "") + (state.toast ? `<div class="toast">${state.toast}</div>` : "");
  window.scrollTo(0, y);
  bind();
}

function bind() {
  const on = (sel, fn) => document.querySelectorAll(sel).forEach((el) => el.addEventListener("click", (e) => fn(el, e)));
  on("[data-tab-go]", (el) => switchTab(el.dataset.tabGo));
  on("[data-go]", (el, e) => {
    e.stopPropagation();
    if (el.dataset.go === "back") back();
    else go(el.dataset.go, el.dataset.tab);
  });
  on("[data-svc]", (el, e) => { e.stopPropagation(); openService(el.dataset.svc); });
  on("[data-merch]", (el, e) => { e.stopPropagation(); if (el.dataset.merch) openShop(el.dataset.merch); });
  on("[data-item]", (el, e) => { e.stopPropagation(); state.item = el.dataset.item; go("detail"); });
  on("[data-add]", (el, e) => {
    e.stopPropagation();
    add(el.dataset.add);
    if (el.dataset.after === "cart") go("cart");
    else if (el.dataset.after === "back") back();
  });
  on("[data-qty]", (el, e) => { e.stopPropagation(); setQty(el.dataset.qty, Number(el.dataset.d)); });
  on("[data-list]", (el) => { state.listTab = el.dataset.list; render(); });
  on("[data-chip]", (el, e) => { e.stopPropagation(); state.dealChip = el.dataset.chip; render(); });
  on("[data-otab]", (el) => { state.orderTab = el.dataset.otab; render(); });
  on("[data-orders]", (el) => { state.orderTab = el.dataset.orders; go("orders"); });
  on("[data-stab]", (el) => { state.shopTab = el.dataset.stab; render(); });
  on("[data-sec]", (el) => {
    state.sec = Number(el.dataset.sec);
    render();
    const target = document.getElementById("sec-" + state.sec);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 46;
      window.scrollTo({ top, behavior: "smooth" });
    }
  });
  on("[data-pay]", (el) => { state.pay = el.dataset.pay; render(); });
  on("[data-order]", () => placeOrder());
  on("[data-addr]", (el) => { state.address = ADDRESSES.find((a) => a.id === el.dataset.addr); back(); toast("已切换收货地址"); });
  on("[data-cuisine]", (el) => { state.cuisine = el.dataset.cuisine; render(); });
  on("[data-review]", (el) => {
    const o = state.orders.find((x) => x.id === el.dataset.review);
    if (o) o.reviewed = true;
    toast("感谢评价，+50 积分");
    state.points += 50;
  });
  on("[data-toast]", (el, e) => { e.stopPropagation(); toast(el.dataset.toast); });
  const pages = document.querySelector(".svc-pages");
  if (pages) {
    pages.addEventListener("scroll", () => {
      const idx = Math.round(pages.scrollLeft / pages.clientWidth);
      document.querySelectorAll(".dots i").forEach((d, i) => d.classList.toggle("on", i === idx));
    }, { passive: true });
  }
}

seedOrders();
render();
