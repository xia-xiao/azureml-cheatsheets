(self.webpackChunkaml_cheatsheet=self.webpackChunkaml_cheatsheet||[]).push([[323],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return i},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},i=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,u=e.originalType,p=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),m=s(n),g=a,h=m["".concat(p,".").concat(g)]||m[g]||l[g]||u;return n?r.createElement(h,o(o({ref:t},i),{},{components:n})):r.createElement(h,o({ref:t},i))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var u=n.length,o=new Array(u);o[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<u;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7718:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p},default:function(){return i}});var r=n(4034),a=n(9973),u=(n(7294),n(3905)),o={title:"\u30b3\u30f3\u30d4\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0\u30bf\u30fc\u30b2\u30c3\u30c8",description:"Guide to setting up and using Azure compute resources in Azure ML.",keywords:["compute","cpu","gpu"]},c={unversionedId:"cheatsheets/python/v1/compute-targets",id:"cheatsheets/python/v1/compute-targets",isDocsHomePage:!1,title:"\u30b3\u30f3\u30d4\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0\u30bf\u30fc\u30b2\u30c3\u30c8",description:"Guide to setting up and using Azure compute resources in Azure ML.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/cheatsheets/python/v1/compute-targets.md",sourceDirName:"cheatsheets/python/v1",slug:"/cheatsheets/python/v1/compute-targets",permalink:"/azureml-cheatsheets/ja/docs/cheatsheets/python/v1/compute-targets",editUrl:"https://github.com/Azure/azureml-cheatsheets/tree/main/website/docs/cheatsheets/python/v1/compute-targets.md",version:"current",frontMatter:{title:"\u30b3\u30f3\u30d4\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0\u30bf\u30fc\u30b2\u30c3\u30c8",description:"Guide to setting up and using Azure compute resources in Azure ML.",keywords:["compute","cpu","gpu"]},sidebar:"pythonSidebar",previous:{title:"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9",permalink:"/azureml-cheatsheets/ja/docs/cheatsheets/python/v1/workspace"},next:{title:"\u74b0\u5883",permalink:"/azureml-cheatsheets/ja/docs/cheatsheets/python/v1/environment"}},p=[{value:"Compute Target \u306e\u53d6\u5f97",id:"compute-target-\u306e\u53d6\u5f97",children:[]},{value:"\u65e2\u5b58 Compute Target \u306e\u30ea\u30b9\u30c8",id:"\u65e2\u5b58-compute-target-\u306e\u30ea\u30b9\u30c8",children:[]},{value:"\u7a7a\u304d\u72b6\u6cc1\u306e\u78ba\u8a8d",id:"\u7a7a\u304d\u72b6\u6cc1\u306e\u78ba\u8a8d",children:[]},{value:"Compute Target \u306e\u4f5c\u6210",id:"compute-target-\u306e\u4f5c\u6210",children:[{value:"SSH \u306e\u5229\u7528",id:"ssh-\u306e\u5229\u7528",children:[]},{value:"\u4f4e\u512a\u5148\u5ea6 \u306e Compute Target",id:"\u4f4e\u512a\u5148\u5ea6-\u306e-compute-target",children:[]},{value:"SDK \u7d4c\u7531\u3067\u306e\u4f5c\u6210",id:"sdk-\u7d4c\u7531\u3067\u306e\u4f5c\u6210",children:[]}]}],s={toc:p};function i(e){var t=e.components,o=(0,a.Z)(e,["components"]);return(0,u.kt)("wrapper",(0,r.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("p",null,"Compute Target (\u30b3\u30f3\u30d4\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0\u30bf\u30fc\u30b2\u30c3\u30c8) \u306f AML \u306e\u8a08\u7b97\u74b0\u5883\u306e\u6982\u5ff5\u3092\u62bd\u8c61\u5316\u3057\u305f\u3082\u306e\u3067\u3059\u3002\u5bfe\u8c61\u306f\u30ed\u30fc\u30ab\u30eb\u30de\u30b7\u30f3\u304b\u3089 Azure VM \u3067\u69cb\u6210\u3055\u308c\u308b\u30af\u30e9\u30b9\u30bf\u30fc\u307e\u3067\u69d8\u3005\u3067\u3059\u3002"),(0,u.kt)("h3",{id:"compute-target-\u306e\u53d6\u5f97"},"Compute Target \u306e\u53d6\u5f97"),(0,u.kt)("p",null,"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9 ",(0,u.kt)("inlineCode",{parentName:"p"},"ws")," \u306b\u3042\u308b\u65e2\u5b58\u306e Compute Target \u306e\u53d6\u5f97:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"from azureml.core import ComputeTarget\ntarget = ComputeTarget(ws, '<compute_target_name>')\n")),(0,u.kt)("h3",{id:"\u65e2\u5b58-compute-target-\u306e\u30ea\u30b9\u30c8"},"\u65e2\u5b58 Compute Target \u306e\u30ea\u30b9\u30c8"),(0,u.kt)("p",null,"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9 ",(0,u.kt)("inlineCode",{parentName:"p"},"ws")," \u306b\u3042\u308b Compute Target \u306e\u30ea\u30b9\u30c8\u306e\u53d6\u5f97:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"ComputeTarget.list(ws): List[ComputeTarget]\n")),(0,u.kt)("h3",{id:"\u7a7a\u304d\u72b6\u6cc1\u306e\u78ba\u8a8d"},"\u7a7a\u304d\u72b6\u6cc1\u306e\u78ba\u8a8d"),(0,u.kt)("p",null,"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u3092\u30c1\u30fc\u30e0\u3067\u5171\u6709\u3059\u308b\u3068\u304d\u306b\u306f\u3001\u30b8\u30e7\u30d6\u3092\u5b9f\u884c\u3059\u308b\u524d\u306b\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9 ",(0,u.kt)("inlineCode",{parentName:"p"},"ws")," \u306e\u8a08\u7b97\u74b0\u5883\u304c\u5229\u7528\u53ef\u80fd\u304b\u78ba\u8a8d\u3059\u308b\u3053\u3068\u304c\u3088\u304f\u3042\u308a\u307e\u3059\u3002"),(0,u.kt)("p",null,(0,u.kt)("a",{parentName:"p",href:"https://ml.azure.com"},"studio")," \u304b\u3089\u7c21\u5358\u306b\u78ba\u8a8d\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,u.kt)("p",null,(0,u.kt)("img",{src:n(2952).Z})),(0,u.kt)("h2",{id:"compute-target-\u306e\u4f5c\u6210"},"Compute Target \u306e\u4f5c\u6210"),(0,u.kt)("p",null,(0,u.kt)("a",{parentName:"p",href:"https://ml.azure.com"},"studio")," \u304b\u3089\u7c21\u5358\u306b\u65b0\u3057\u3044 Compute Target \u304c\u4f5c\u6210\u3067\u304d\u307e\u3059\u3002"),(0,u.kt)("p",null,'"\u30b3\u30f3\u30d4\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0" \u306e\u30e1\u30cb\u30e5\u30fc\u9078\u629e> "\u30b3\u30f3\u30d4\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0\u30af\u30e9\u30b9\u30bf" \u306e\u30bf\u30d6\u3092\u9078\u629e > "+ \u65b0\u898f\u4f5c\u6210" \u30dc\u30bf\u30f3\u3092\u9078\u629e:'),(0,u.kt)("p",null,(0,u.kt)("img",{src:n(9334).Z})),(0,u.kt)("p",null,"\u4f5c\u6210\u6642\u306b\u6b21\u306e\u60c5\u5831\u3092\u5165\u529b\u3057\u307e\u3059\u3002:"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("strong",{parentName:"li"},"\u30b3\u30f3\u30d4\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0\u540d"),": \u5f8c\u306b studio \u3084 Python SDK \u304b\u3089\u53c2\u7167\u3059\u308b\u306e\u306b\u5229\u7528\u3055\u308c\u307e\u3059\u3002\u5165\u529b\u5fc5\u9808\u3067\u3059\u3002\u540d\u524d\u306f \u540d\u524d\u306e\u9577\u3055\u306f 2 \u304b\u3089 16 \u6587\u5b57\u306e\u9593\u3067\u306a\u3051\u308c\u3070\u306a\u308a\u307e\u305b\u3093\u3002\u6709\u52b9\u306a\u6587\u5b57\u306f\u82f1\u5b57\u3001\u6570\u5b57\u3001- \u6587\u5b57\u3067\u3059\u3002"),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("strong",{parentName:"li"},"\u4eee\u60f3\u30de\u30b7\u30f3\u306e\u7a2e\u985e"),': "CPU" or "GPU"'),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("strong",{parentName:"li"},"\u4eee\u60f3\u30de\u30b7\u30f3\u306e\u512a\u5148\u5ea6"),': "\u5c02\u7528" \u3082\u3057\u304f\u306f "\u4f4e\u512a\u5148\u5ea6" ',(0,u.kt)("blockquote",{parentName:"li"},(0,u.kt)("p",{parentName:"blockquote"},"\u4f4e\u512a\u5148\u5ea6\u306e\u4eee\u60f3\u30de\u30b7\u30f3\u306f\u5b89\u304f\u4f7f\u3048\u307e\u3059\u304c\u3001\u8a08\u7b97\u74b0\u5883\u306e\u78ba\u4fdd\u3092\u4fdd\u8a3c\u3057\u3066\u3044\u307e\u305b\u3093\u3002\u30b8\u30e7\u30d6\u304c\u9014\u4e2d\u3067\u4e2d\u65ad\u3055\u308c\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002"))),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("strong",{parentName:"li"},"\u4eee\u60f3\u30de\u30b7\u30f3\u306e\u30b5\u30a4\u30ba"),": \u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u30ea\u30b9\u30c8\u304b\u3089\u9078\u629e\u3057\u307e\u3059\u3002\u5229\u7528\u53ef\u80fd\u306a\u4eee\u60f3\u30de\u30b7\u30f3\u306e\u30b5\u30a4\u30ba\u306e\u4e00\u89a7\u306f",(0,u.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/global-infrastructure/services/?products=virtual-machines"},"\u3053\u3061\u3089"),"\u3067\u3059\u3002"),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("strong",{parentName:"li"},"\u6700\u5c0f / \u6700\u5927\u30ce\u30fc\u30c9\u6570"),": Compute Target \u306f\u5b9f\u884c\u3055\u308c\u305f\u30b8\u30e7\u30d6\u306e\u6570\u306b\u4f9d\u3063\u3066\u6700\u5c0f\u30ce\u30fc\u30c9\u6570\u3068\u6700\u5927\u30ce\u30fc\u30c9\u6570\u306e\u9593\u3067\u30aa\u30fc\u30c8\u30b9\u30b1\u30fc\u30b9\u3057\u307e\u3059\u3002\u6700\u5c0f\u30ce\u30fc\u30c9\u6570\u3092 0 \u306b\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u3067\u8a08\u7b97\u74b0\u5883\u4e0a\u3067\u306e\u30b8\u30e7\u30d6\u304c\u5b8c\u4e86\u3059\u308b\u3068\u81ea\u52d5\u3067 0 \u53f0\u306b\u7e2e\u5c0f\u3059\u308b\u305f\u3081\u30b3\u30b9\u30c8\u3092\u7bc0\u7d04\u3067\u304d\u307e\u3059\u3002"),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("strong",{parentName:"li"},"\u30b9\u30b1\u30fc\u30eb\u30c0\u30a6\u30f3\u3059\u308b\u524d\u306e\u30a2\u30a4\u30c9\u30eb\u6642\u9593 (\u79d2)"),": \u8a08\u7b97\u74b0\u5883\u3092\u30b9\u30b1\u30fc\u30eb\u30c0\u30a6\u30f3\u3059\u308b\u524d\u306e\u30a2\u30a4\u30c9\u30eb\u6642\u9593\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002")),(0,u.kt)("p",null,"\u5099\u8003: \u8a08\u7b97\u74b0\u5883\u3092\u5e38\u306b Azure Machine Learning Workspace \u3068\u540c\u3058\u30ea\u30fc\u30b8\u30e7\u30f3\u306b\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002"),(0,u.kt)("h3",{id:"ssh-\u306e\u5229\u7528"},"SSH \u306e\u5229\u7528"),(0,u.kt)("p",null,"\u7ba1\u7406\u8005\u30e6\u30fc\u30b6\u540d\u3068\u30d1\u30b9\u30ef\u30fc\u30c9\u30fbSSH \u30ad\u30fc\u3092\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u3067\u3001Compute Target \u306b\u5bfe\u3057\u3066 SSH \u3067\u63a5\u7d9a\u3067\u304d\u307e\u3059\u3002"),(0,u.kt)("p",null,(0,u.kt)("img",{src:n(7910).Z})),(0,u.kt)("h3",{id:"\u4f4e\u512a\u5148\u5ea6-\u306e-compute-target"},"\u4f4e\u512a\u5148\u5ea6 \u306e Compute Target"),(0,u.kt)("p",null,"\u4f4e\u512a\u5148\u5ea6\u306e\u4eee\u60f3\u30de\u30b7\u30f3\u306f\u5b89\u304f\u4f7f\u3048\u307e\u3059\u304c\u3001\u8a08\u7b97\u74b0\u5883\u306e\u78ba\u4fdd\u3092\u4fdd\u8a3c\u3057\u3066\u3044\u307e\u305b\u3093\u3002\u30b8\u30e7\u30d6\u304c\u9014\u4e2d\u3067\u4e2d\u65ad\u3055\u308c\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002"),(0,u.kt)("p",null,(0,u.kt)("img",{src:n(9161).Z})),(0,u.kt)("h3",{id:"sdk-\u7d4c\u7531\u3067\u306e\u4f5c\u6210"},"SDK \u7d4c\u7531\u3067\u306e\u4f5c\u6210"),(0,u.kt)("p",null,"SDK \u7d4c\u7531\u3067\u306e Compute Target \u306e\u4f5c\u6210:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"from azureml.core import Workspace\nfrom azureml.core.compute import ComputeTarget, AmlCompute\nfrom azureml.core.compute_target import ComputeTargetException\n\nws = Workspace.from_config() # .azureml \u30d5\u30a9\u30eb\u30c0\u306e\u30d5\u30a1\u30a4\u30eb\u304b\u3089\u63a5\u7d9a\u60c5\u5831\u3092\u53c2\u7167\n\n# CPU \u30af\u30e9\u30b9\u30bf\u30fc\u306e\u540d\u524d\u3092\u9078\u629e\ncpu_cluster_name = \"cpu-cluster\"\n\n# \u65e2\u5b58\u306e\u30af\u30e9\u30b9\u30bf\u30fc\u304c\u7121\u3044\u3053\u3068\u3092\u78ba\u8a8d\ntry:\n    cpu_cluster = ComputeTarget(workspace=ws, name=cpu_cluster_name)\n    print('Found existing cluster, use it.')\nexcept ComputeTargetException:\n    compute_config = AmlCompute.provisioning_configuration(vm_size='STANDARD_D2_V2',\n                                                           max_nodes=4, \n                                                           idle_seconds_before_scaledown=2400)\n    cpu_cluster = ComputeTarget.create(ws, cpu_cluster_name, compute_config)\n\ncpu_cluster.wait_for_completion(show_output=True)\n")))}i.isMDXComponent=!0},2952:function(e,t,n){"use strict";t.Z=n.p+"assets/images/compute-target-c55fe2396fc4d44b3739ac2455c89926.png"},9161:function(e,t){"use strict";t.Z="data:image/png;base64,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"},7910:function(e,t,n){"use strict";t.Z=n.p+"assets/images/create-compute-ssh-07210ae144bdbbbf58ec03f43ea760fa.png"},9334:function(e,t,n){"use strict";t.Z=n.p+"assets/images/create-compute-df729776bb078467009fe6951c020baa.png"}}]);