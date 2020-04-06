## 1.render

```js
Vue.prototype._render = function () {
  const vm = this
  const { render, _parentVnode } = mv.$options
  if (_parentVnode) {
    vm.$scopedSlots = _parentVnode.data.scopedSlots || emptyObject
  }
  vm.$vnode = _parentVnode
  let vnode
  try {
    //将template编译成render方法
    vnode = render.call(vm._renderProxy, vm.$createElement)
  } catch (e) {
    handleError(e, vm, 'render')
  }
  vnode = vm._vnode
  if (!vnode instanceof VNode) {
    vnode = createEmptyVNode()
  }
  vnode.parent = _parentVnode
  return vnode
}
```

```js
export function initRender(vm) {
  vm._c = (a, b, c, d) => createElement(vm, a, b, c, d, false)
  vm.$createElement = (a, b, c, d) => createElement(vm, a, b, c, d, true)
}
```

## 2.Virtual DOM

```
export default class VNode{
}
```

## 3.createElemnet

```js
export function createElement(
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normaliztionType = children
    children = data
    data = undefined
  }
  if (isTrue(alwaysNormalize)) {
    noramlizationType = ALWAYS_NORMALIZE
  }
  return _createElement(context, tag, data, children, normalizationType)
}
```

```js
// context表示VNode的上下文环境
export function _createElement(
  context,
  tag,
  data,
  children,
  noramlizationType
) {
  if (isDef(data) && isDef(data.__ob__)) {
    return createEmptyVNode()
  }
  if (isDef(data) && isDef(data.is)) {
    tag = data.is
  }
  if(!tag){
    return createEmptyVNode()
  }
  if(Array.isArray(children)&& typeof children[0] === 'function'){
    data = data || {}
    data.scopedSlots ={default: children[0]}
    children.length = 0
  }
  if(normalizationType === ALWAYS_NORMALIZE){
    children = normalizeChildren(children)
  }else if(normalizationTYpe == SIMPLE_NORMALIZE){
    children = simpleNormalizeChildren(children)
  }
  let vnode, ns
  if(typeof tag === 'string'){
    let Ctor
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag)
    if(config.isReservedTag(tag)){
      vnode = new Vnode(
        config.parsePlatformTagName(tag),data,children,
        undefined,undefined,context
      )
    }else if(isDef(Ctor = resolveAsset(context.$options,'components',tag))){
      vnode = createComponent(Ctro,data,context,children,tag)
    }else{
      vnode = new Vnode(
        tag,data,children,
        undefined,undefined,context
      )
    }else {
      vnode = createComponent(tag,data,context,children)
    }
    if(Array.isArray(vnode)){
      return vnode
    }else if(isDef(vnode)){
      if(isDef(ns)) applyNS(vnode,ns)
      if(isDef(data)) registerDeepBindings(data)
      return vnode
    }else {
      return createEmptyVNode()
    }
  }
}
```

## 4.children 的规范化

```js
// simpleNormalizeChildren方法调用的场景是render函数当函数
export function simpleNormalizeChildren(children) {
  for (let i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply[([], children)]
    }
  }
  return children
}
```

```js
//normalizeChildren方法调用的场景有两种，一个场景是render函数是用户手写的，当children只有一个节点的时候，Vue.js从接口层面允许用户吧children写成基础类型用来创建单个简单的文本节点，这种情况会调用createTextVnode创建一个文本节点的VNode；另一个场景是当编译slot、v-for的时候会调用normalizeArrayChildren方法
export function normalizeChildren(children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
    ? normalizeArrayChildren(children)
    : undefined
}
```

```js
function normalizeArrayChildren() {
  const res = []
  let i, c, lastIndex, last
  for (i = 0; i < children.length; i++) {
    c = children[i]
    if (isUndef(c) || typeof c === 'boolean') continue
    lastIndex = res.length - 1
    last = res[lastIndex]
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, `${nestedIndex || ''}_${i}`)
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVnode(last.text + c[0].text)
          c.shift()
        }
        res.push.apply(res, c)
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
      }
    }
  }
}
```

## 5.vnode 创建
