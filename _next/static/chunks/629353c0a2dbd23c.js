(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,33525,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"warnOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},98183,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={assign:function(){return c},searchParamsToUrlQuery:function(){return a},urlQueryToSearchParams:function(){return i}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});function a(e){let t={};for(let[r,n]of e.entries()){let e=t[r];void 0===e?t[r]=n:Array.isArray(e)?e.push(n):t[r]=[e,n]}return t}function s(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function i(e){let t=new URLSearchParams;for(let[r,n]of Object.entries(e))if(Array.isArray(n))for(let e of n)t.append(r,s(e));else t.set(r,s(n));return t}function c(e,...t){for(let r of t){for(let t of r.keys())e.delete(t);for(let[t,n]of r.entries())e.append(t,n)}return e}},95057,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={formatUrl:function(){return i},formatWithValidation:function(){return l},urlObjectKeys:function(){return c}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let a=e.r(90809)._(e.r(98183)),s=/https?|ftp|gopher|file/;function i(e){let{auth:t,hostname:r}=e,n=e.protocol||"",o=e.pathname||"",i=e.hash||"",c=e.query||"",l=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?l=t+e.host:r&&(l=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(l+=":"+e.port)),c&&"object"==typeof c&&(c=String(a.urlQueryToSearchParams(c)));let u=e.search||c&&`?${c}`||"";return n&&!n.endsWith(":")&&(n+=":"),e.slashes||(!n||s.test(n))&&!1!==l?(l="//"+(l||""),o&&"/"!==o[0]&&(o="/"+o)):l||(l=""),i&&"#"!==i[0]&&(i="#"+i),u&&"?"!==u[0]&&(u="?"+u),o=o.replace(/[?#]/g,encodeURIComponent),u=u.replace("#","%23"),`${n}${l}${o}${u}${i}`}let c=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function l(e){return i(e)}},18581,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return o}});let n=e.r(71645);function o(e,t){let r=(0,n.useRef)(null),o=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=r.current;e&&(r.current=null,e());let t=o.current;t&&(o.current=null,t())}else e&&(r.current=a(e,n)),t&&(o.current=a(t,n))},[e,t])}function a(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},18967,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={DecodeError:function(){return g},MiddlewareNotFoundError:function(){return w},MissingStaticPage:function(){return x},NormalizeError:function(){return v},PageNotFoundError:function(){return b},SP:function(){return m},ST:function(){return y},WEB_VITALS:function(){return a},execOnce:function(){return s},getDisplayName:function(){return d},getLocationOrigin:function(){return l},getURL:function(){return u},isAbsoluteUrl:function(){return c},isResSent:function(){return p},loadGetInitialProps:function(){return h},normalizeRepeatedSlashes:function(){return f},stringifyError:function(){return j}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let a=["CLS","FCP","FID","INP","LCP","TTFB"];function s(e){let t,r=!1;return(...n)=>(r||(r=!0,t=e(...n)),t)}let i=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,c=e=>i.test(e);function l(){let{protocol:e,hostname:t,port:r}=window.location;return`${e}//${t}${r?":"+r:""}`}function u(){let{href:e}=window.location,t=l();return e.substring(t.length)}function d(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function p(e){return e.finished||e.headersSent}function f(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function h(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await h(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&p(r))return n;if(!n)throw Object.defineProperty(Error(`"${d(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return n}let m="undefined"!=typeof performance,y=m&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class g extends Error{}class v extends Error{}class b extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class x extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class w extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function j(e){return JSON.stringify({message:e.message,stack:e.stack})}},73668,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return a}});let n=e.r(18967),o=e.r(52817);function a(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let t=(0,n.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,o.hasBasePath)(r.pathname)}catch(e){return!1}}},84508,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"errorOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},22016,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={default:function(){return g},useLinkStatus:function(){return b}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let a=e.r(90809),s=e.r(43476),i=a._(e.r(71645)),c=e.r(95057),l=e.r(8372),u=e.r(18581),d=e.r(18967),p=e.r(5550);e.r(33525);let f=e.r(91949),h=e.r(73668),m=e.r(65165);function y(e){return"string"==typeof e?e:(0,c.formatUrl)(e)}function g(t){var r;let n,o,a,[c,g]=(0,i.useOptimistic)(f.IDLE_LINK_STATUS),b=(0,i.useRef)(null),{href:x,as:w,children:j,prefetch:N=null,passHref:A,replace:k,shallow:S,scroll:C,onClick:P,onMouseEnter:T,onTouchStart:z,legacyBehavior:q=!1,onNavigate:O,ref:E,unstable_dynamicOnHover:R,..._}=t;n=j,q&&("string"==typeof n||"number"==typeof n)&&(n=(0,s.jsx)("a",{children:n}));let F=i.default.useContext(l.AppRouterContext),I=!1!==N,M=!1!==N?null===(r=N)||"auto"===r?m.FetchStrategy.PPR:m.FetchStrategy.Full:m.FetchStrategy.PPR,{href:W,as:L}=i.default.useMemo(()=>{let e=y(x);return{href:e,as:w?y(w):e}},[x,w]);if(q){if(n?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});o=i.default.Children.only(n)}let $=q?o&&"object"==typeof o&&o.ref:E,B=i.default.useCallback(e=>(null!==F&&(b.current=(0,f.mountLinkInstance)(e,W,F,M,I,g)),()=>{b.current&&((0,f.unmountLinkForCurrentNavigation)(b.current),b.current=null),(0,f.unmountPrefetchableInstance)(e)}),[I,W,F,M,g]),U={ref:(0,u.useMergedRef)(B,$),onClick(t){q||"function"!=typeof P||P(t),q&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),!F||t.defaultPrevented||function(t,r,n,o,a,s,c){if("undefined"!=typeof window){let l,{nodeName:u}=t.currentTarget;if("A"===u.toUpperCase()&&((l=t.currentTarget.getAttribute("target"))&&"_self"!==l||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,h.isLocalURL)(r)){a&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),c){let e=!1;if(c({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:d}=e.r(99781);i.default.startTransition(()=>{d(n||r,a?"replace":"push",s??!0,o.current)})}}(t,W,L,b,k,C,O)},onMouseEnter(e){q||"function"!=typeof T||T(e),q&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),F&&I&&(0,f.onNavigationIntent)(e.currentTarget,!0===R)},onTouchStart:function(e){q||"function"!=typeof z||z(e),q&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),F&&I&&(0,f.onNavigationIntent)(e.currentTarget,!0===R)}};return(0,d.isAbsoluteUrl)(L)?U.href=L:q&&!A&&("a"!==o.type||"href"in o.props)||(U.href=(0,p.addBasePath)(L)),a=q?i.default.cloneElement(o,U):(0,s.jsx)("a",{..._,...U,children:n}),(0,s.jsx)(v.Provider,{value:c,children:a})}e.r(84508);let v=(0,i.createContext)(f.IDLE_LINK_STATUS),b=()=>(0,i.useContext)(v);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},64829,e=>{"use strict";var t=e.i(43476),r=e.i(71645),n=e.i(22016),o=e.i(28192);function a(){let[e,a]=(0,r.useState)("all"),[s,i]=(0,r.useState)(""),[c,l]=(0,r.useState)([]),[u,d]=(0,r.useState)(!1),[p,f]=(0,r.useState)(new Set),h={ordering:[{id:"ordering-1",question:"How do I purchase products from FaveToy?",answer:`FaveToy is an affiliate partner with Amazon. When you click on any product, you'll be redirected to Amazon.com where you can complete your purchase. Here's how it works:
        
• Browse our curated collection of tech toys
• Click on any product you're interested in
• You'll be taken to the product page on Amazon
• Complete your purchase through Amazon's secure checkout
• Your order is fulfilled by Amazon with all their guarantees

We earn a small commission from qualifying purchases, which helps us maintain and improve our curation service at no extra cost to you.`},{id:"ordering-2",question:"Are prices on FaveToy the same as Amazon?",answer:`Yes! The prices you see on FaveToy are the same as on Amazon. Our affiliate relationship doesn't increase the cost of products. However, prices on Amazon can change frequently due to:

• Daily deals and lightning sales
• Seasonal promotions
• Stock availability
• Seller pricing updates

We update our prices regularly, but always check the final price on Amazon before completing your purchase.`},{id:"ordering-3",question:"Can I use my Amazon Prime membership?",answer:`Absolutely! When you purchase through our links, you're shopping directly on Amazon, so all your Amazon benefits apply:

• Prime free 2-day shipping
• Prime same-day or next-day delivery (where available)
• Amazon Prime exclusive deals
• Prime Video game rewards
• All other Prime member benefits`},{id:"ordering-4",question:"What payment methods are accepted?",answer:`Since purchases are completed on Amazon, you can use any payment method that Amazon accepts:

• Credit and debit cards (Visa, Mastercard, American Express, Discover)
• Amazon Store Card
• Amazon Gift Cards
• Amazon Pay
• PayPal (in some regions)
• Bank accounts (for ACH transfers)
• Buy now, pay later options (Affirm, etc.)`},{id:"ordering-5",question:"Can I save items for later?",answer:`While FaveToy doesn't have a built-in wishlist feature, you have several options:

• Add items to your Amazon Wish List when you visit the product page
• Save items to your Amazon Cart for later
• Bookmark your favorite products on FaveToy
• Share product links with yourself via email

We're working on adding a favorites feature directly to FaveToy - stay tuned!`}],shipping:[{id:"shipping-1",question:"How long does shipping take?",answer:`Shipping times depend on your location and the shipping option you choose on Amazon:

• Prime Members: Free 2-day shipping on eligible items
• Same-Day Delivery: Available in select cities for eligible items
• Standard Shipping: Typically 5-7 business days
• Expedited Shipping: 2-3 business days
• International Shipping: Varies by country (1-4 weeks)

Shipping times are calculated from when Amazon processes your order, not from when you click through FaveToy.`},{id:"shipping-2",question:"How do I track my order?",answer:`Order tracking is handled entirely through Amazon:

• Check your email for Amazon shipping confirmations
• Log into your Amazon account and go to "Your Orders"
• Click "Track Package" next to your order
• Use the Amazon app for real-time delivery notifications
• Some deliveries include photo confirmation

FaveToy doesn't have access to your order information for privacy reasons.`},{id:"shipping-3",question:"Do you ship internationally?",answer:`International shipping availability depends on Amazon's policies and the specific product:

• Many items ship internationally through Amazon Global
• Some products may have geographic restrictions
• International customers are responsible for customs/duties
• Shipping times vary by destination country
• Check product eligibility on the Amazon product page`},{id:"shipping-4",question:"What if my package is damaged or lost?",answer:`Amazon's A-to-Z Guarantee protects your purchases:

• Report damaged items directly to Amazon customer service
• Lost packages are covered by Amazon's delivery guarantee
• Take photos of any damage for your claim
• Amazon typically offers replacement or refund options
• Contact Amazon within 90 days of the estimated delivery date`}],returns:[{id:"returns-1",question:"What is the return policy?",answer:`Returns follow Amazon's standard return policy:

• Most items: 30-day return window from delivery
• Electronics: Some have extended holiday returns
• Items must be in original condition with packaging
• Free returns on most items for Prime members
• Instant refunds available at certain drop-off locations

Some items may have different return windows or be non-returnable - check the product page for details.`},{id:"returns-2",question:"How do I return an item?",answer:`Returns are processed through Amazon:

• Go to "Your Orders" in your Amazon account
• Select "Return or Replace Items"
• Choose your return reason and preferred refund method
• Print the free return label
• Drop off at UPS, Amazon Locker, or schedule pickup

Refunds are typically processed within 3-5 business days after Amazon receives the item.`},{id:"returns-3",question:"Can I exchange an item for a different one?",answer:`Amazon offers several exchange options:

• Direct exchange for the same item (different size/color)
• Return for refund and repurchase a different item
• Some items offer instant exchanges
• Replacement for defective items

The exchange process varies by product and seller. Check the specific item's return options on Amazon.`}],products:[{id:"products-1",question:"How do you choose which products to feature?",answer:`Our curation process is rigorous and focuses on quality:

• Innovation: Cutting-edge technology and unique features
• Educational Value: STEM learning and skill development
• Safety Certifications: Meet or exceed safety standards
• User Reviews: High ratings and positive feedback
• Brand Reputation: Trusted manufacturers
• Value for Money: Fair pricing for quality offered
• Age Appropriateness: Clear age recommendations`},{id:"products-2",question:"What age groups are your toys suitable for?",answer:`We feature tech toys for all age groups:

• Ages 3-5: Early learning tablets, simple coding toys
• Ages 6-8: Beginner robots, STEM kits
• Ages 9-12: Advanced coding robots, building sets
• Teens (13+): Drones, VR headsets, complex robotics
• Adults: Collector items, advanced tech gadgets

Always check the manufacturer's age recommendations on the product page.`},{id:"products-3",question:"Do products come with warranties?",answer:`Warranty coverage varies by product and manufacturer:

• Most electronics include a 1-year manufacturer warranty
• Some premium products offer extended warranties
• Amazon offers additional protection plans for purchase
• Check product descriptions for specific warranty details
• Register products with manufacturers for full coverage`},{id:"products-4",question:"Are batteries included with electronic toys?",answer:`Battery inclusion varies by product:

• Some toys include batteries for immediate play
• Many rechargeable toys come with USB charging cables
• Premium products often include rechargeable batteries
• Check "What's in the box" section on product pages
• We recommend having extra batteries on hand`},{id:"products-5",question:"Can you recommend toys for special needs children?",answer:`We feature several toys suitable for children with special needs:

• Sensory-friendly robots with adjustable settings
• Visual programming tools for non-readers
• Toys with multiple input methods
• Adjustable difficulty levels
• Products with accessibility features

Contact us at contact@favetoy.com for personalized recommendations based on specific needs.`}],safety:[{id:"safety-1",question:"Are the toys safe for children?",answer:`Safety is our top priority. All featured products:

• Meet or exceed CPSC safety standards
• Have appropriate age ratings
• Include clear safety warnings
• Are from reputable manufacturers
• Have passed required safety testing
• Include proper CE and FCC certifications

Always supervise children during play and follow manufacturer guidelines.`},{id:"safety-2",question:"How do I know products are authentic?",answer:`We only link to products sold or fulfilled by Amazon:

• Amazon verifies seller authenticity
• Products covered by Amazon's A-to-Z Guarantee
• Counterfeit products are eligible for refund
• Check for "Ships from and sold by Amazon.com"
• Look for official brand stores on Amazon`},{id:"safety-3",question:"What about online privacy for smart toys?",answer:`Many tech toys connect to the internet. Here's how to stay safe:

• Read privacy policies before connecting toys online
• Use parental controls when available
• Create child-safe accounts without personal info
• Keep toy firmware updated for security patches
• Review app permissions before installation
• Supervise online features and interactions`}],account:[{id:"account-1",question:"Do I need an account to shop on FaveToy?",answer:`No account is needed for FaveToy! Here's how it works:

• Browse our catalog freely without signing up
• Click products to shop on Amazon
• Use your existing Amazon account for purchases
• We don't store any personal information
• No passwords or login required on FaveToy`},{id:"account-2",question:"What data does FaveToy collect?",answer:`We collect minimal, anonymous data:

• General site traffic analytics
• Which products are popular (no personal info)
• Basic browser and device type
• No names, emails, or personal details
• No payment information
• No tracking across other websites

See our Privacy Policy for complete details.`},{id:"account-3",question:"How do you use cookies?",answer:`We use cookies minimally for:

• Remembering your filter preferences during visits
• Basic analytics to improve our service
• Amazon affiliate tracking (required for commissions)
• No personal data stored in cookies
• You can disable cookies in your browser`},{id:"account-4",question:"How is FaveToy funded?",answer:`FaveToy operates through Amazon's affiliate program:

• We earn small commissions on purchases (3-10%)
• This doesn't increase your price
• Helps us maintain and improve the site
• Allows us to keep the service free
• No ads or sponsored placements
• Products chosen solely on merit`}]},m=()=>{let e=[];return Object.values(h).forEach(t=>{e.push(...t)}),e};(0,r.useEffect)(()=>{s.length<2?d(!1):(l(m().filter(e=>e.question.toLowerCase().includes(s.toLowerCase())).map(e=>e.question)),d(!0))},[s]);let y=e=>{a(e),d(!1),i("")};return(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"background"}),(0,t.jsx)("div",{className:"grid-overlay"}),(0,t.jsx)("div",{className:"floating-orb orb-1"}),(0,t.jsx)("div",{className:"floating-orb orb-2"}),(0,t.jsx)("header",{className:"header",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:"header-content",children:[(0,t.jsxs)(n.default,{href:"/",className:"logo",children:[(0,t.jsx)("div",{className:"logo-icon",children:(0,t.jsxs)("svg",{viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsx)("defs",{children:(0,t.jsxs)("linearGradient",{id:"logoGrad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[(0,t.jsx)("stop",{offset:"0%",style:{stopColor:"#00d4ff",stopOpacity:1}}),(0,t.jsx)("stop",{offset:"100%",style:{stopColor:"#ff00ff",stopOpacity:1}})]})}),(0,t.jsx)("rect",{x:"20",y:"30",width:"60",height:"40",rx:"10",fill:"none",stroke:"url(#logoGrad)",strokeWidth:"3"}),(0,t.jsx)("circle",{cx:"35",cy:"45",r:"5",fill:"#00d4ff"}),(0,t.jsx)("circle",{cx:"65",cy:"45",r:"5",fill:"#ff00ff"}),(0,t.jsx)("path",{d:"M 35 55 Q 50 65 65 55",stroke:"url(#logoGrad)",strokeWidth:"2",fill:"none"}),(0,t.jsx)("circle",{cx:"50",cy:"20",r:"8",fill:"#ffff00",opacity:"0.8"}),(0,t.jsx)("line",{x1:"50",y1:"30",x2:"50",y2:"35",stroke:"url(#logoGrad)",strokeWidth:"2"})]})}),(0,t.jsx)("span",{className:"logo-text",children:"FaveToy"})]}),(0,t.jsx)(n.default,{href:"/",className:"nav-link",children:"Back to Shop"})]})})}),(0,t.jsx)("section",{className:"hero",children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)("h1",{className:"hero-title",children:"Support Center"}),(0,t.jsx)("p",{className:"hero-subtitle",children:"Get instant answers to your questions about the future of play"})]})}),(0,t.jsx)("section",{className:"search-section",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:"search-container",children:[(0,t.jsx)("input",{type:"text",className:"search-box",placeholder:"Search for answers...",value:s,onChange:e=>i(e.target.value)}),(0,t.jsx)("span",{className:"search-icon",children:"🔍"}),u&&(0,t.jsx)("div",{className:"search-results show",children:c.length>0?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("p",{children:["Found ",c.length," result(s):"]}),c.map((e,r)=>(0,t.jsx)("div",{style:{padding:"10px",borderBottom:"1px solid var(--glass-border)"},children:e},r))]}):(0,t.jsx)("p",{children:"No results found. Try different keywords or browse categories below."})})]})})}),(0,t.jsx)("section",{className:"quick-help",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:"quick-help-grid",children:[(0,t.jsxs)("div",{className:"help-card",onClick:()=>y("ordering"),children:[(0,t.jsx)("div",{className:"help-icon",children:"🛒"}),(0,t.jsx)("h3",{className:"help-title",children:"Ordering"}),(0,t.jsx)("p",{className:"help-text",children:"How to shop & purchase"})]}),(0,t.jsxs)("div",{className:"help-card",onClick:()=>y("shipping"),children:[(0,t.jsx)("div",{className:"help-icon",children:"📦"}),(0,t.jsx)("h3",{className:"help-title",children:"Shipping"}),(0,t.jsx)("p",{className:"help-text",children:"Delivery & tracking"})]}),(0,t.jsxs)("div",{className:"help-card",onClick:()=>y("returns"),children:[(0,t.jsx)("div",{className:"help-icon",children:"↩️"}),(0,t.jsx)("h3",{className:"help-title",children:"Returns"}),(0,t.jsx)("p",{className:"help-text",children:"Refunds & exchanges"})]}),(0,t.jsxs)("div",{className:"help-card",onClick:()=>y("products"),children:[(0,t.jsx)("div",{className:"help-icon",children:"🤖"}),(0,t.jsx)("h3",{className:"help-title",children:"Products"}),(0,t.jsx)("p",{className:"help-text",children:"Toys & features"})]}),(0,t.jsxs)("div",{className:"help-card",onClick:()=>y("safety"),children:[(0,t.jsx)("div",{className:"help-icon",children:"🛡️"}),(0,t.jsx)("h3",{className:"help-title",children:"Safety"}),(0,t.jsx)("p",{className:"help-text",children:"Quality & security"})]}),(0,t.jsxs)("div",{className:"help-card",onClick:()=>y("account"),children:[(0,t.jsx)("div",{className:"help-icon",children:"👤"}),(0,t.jsx)("h3",{className:"help-title",children:"Account"}),(0,t.jsx)("p",{className:"help-text",children:"Privacy & settings"})]})]})})}),(0,t.jsx)("section",{className:"faq-section",children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)("h2",{className:"section-title",children:"Frequently Asked Questions"}),(0,t.jsxs)("div",{className:"category-tabs",children:[(0,t.jsx)("button",{className:`category-tab ${"all"===e?"active":""}`,onClick:()=>y("all"),children:"All Topics"}),(0,t.jsx)("button",{className:`category-tab ${"ordering"===e?"active":""}`,onClick:()=>y("ordering"),children:"Ordering"}),(0,t.jsx)("button",{className:`category-tab ${"shipping"===e?"active":""}`,onClick:()=>y("shipping"),children:"Shipping"}),(0,t.jsx)("button",{className:`category-tab ${"returns"===e?"active":""}`,onClick:()=>y("returns"),children:"Returns"}),(0,t.jsx)("button",{className:`category-tab ${"products"===e?"active":""}`,onClick:()=>y("products"),children:"Products"}),(0,t.jsx)("button",{className:`category-tab ${"safety"===e?"active":""}`,onClick:()=>y("safety"),children:"Safety"}),(0,t.jsx)("button",{className:`category-tab ${"account"===e?"active":""}`,onClick:()=>y("account"),children:"Account"})]}),(0,t.jsxs)("div",{className:"faq-category active",children:[(0,t.jsxs)("div",{className:"category-header",children:[(0,t.jsx)("h3",{className:"category-title",children:"all"===e?"All Support Topics":"ordering"===e?"Ordering & Purchases":"shipping"===e?"Shipping & Delivery":"returns"===e?"Returns & Refunds":"products"===e?"Products & Recommendations":"safety"===e?"Safety & Quality":"account"===e?"Account & Privacy":""}),(0,t.jsx)("p",{className:"category-description",children:"all"===e?"Browse all frequently asked questions":"ordering"===e?"Everything about shopping and buying on FaveToy":"shipping"===e?"Information about getting your tech toys delivered":"returns"===e?"Policies for returns, exchanges, and refunds":"products"===e?"Learn about our tech toy selection and features":"safety"===e?"Information about product safety and quality standards":"account"===e?"Your privacy and data protection":""})]}),("all"===e?m():h[e]||[]).map(e=>(0,t.jsxs)("div",{className:`faq-item ${p.has(e.id)?"open":""}`,children:[(0,t.jsxs)("div",{className:"faq-question",onClick:()=>{var t;let r;return t=e.id,void((r=new Set(p)).has(t)?r.delete(t):r.add(t),f(r))},children:[(0,t.jsx)("span",{className:"faq-question-text",children:e.question}),(0,t.jsx)("span",{className:"faq-toggle",children:"+"})]}),(0,t.jsx)("div",{className:"faq-answer",children:(0,t.jsx)("div",{className:"faq-answer-content",children:e.answer.split("\n").map((e,r)=>e.startsWith("•")?(0,t.jsx)("li",{children:e.substring(1).trim()},r):e.trim()?(0,t.jsx)("p",{children:e},r):null)})})]},e.id))]})]})}),(0,t.jsx)("section",{className:"contact-banner",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:"contact-content",children:[(0,t.jsx)("h2",{className:"contact-title",children:"Still Need Help?"}),(0,t.jsx)("p",{className:"contact-text",children:"Our team is here to answer any questions you have about finding the perfect tech toys."}),(0,t.jsx)(n.default,{href:"/contact",className:"contact-button",children:"Contact Support"})]})})}),(0,t.jsx)(o.default,{})]})}e.s(["default",()=>a])}]);