<script setup>
import { darkTheme,  } from "naive-ui";
import {
    NConfigProvider,
    NCard,
    NSpace,
    NButton,
    NTag,
    NLayout,
    NLayoutHeader,
    NLayoutContent,
    NLayoutFooter,
    NAnchor,
    NAnchorLink,
    NPagination,
    NGrid,
    NGridItem,
    NPageHeader,
    NMenu,
    NScrollbar,
    NSwitch
} from 'naive-ui'

import { ref } from "vue";
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'

import HelloWorld from './components/HelloWorld.vue'
import ThemeSwitch from "./components/theme_switch.vue";
import HtmlHeader from "./components/html-header.vue";
import HtmlHeaderCode from "./components/html-header.vue?raw";
import HtmlParagraph from "./components/html-paragraph.vue";
import HtmlParagraphCode from "./components/html-paragraph.vue?raw";
import HtmlHyperlink from "./components/html-hyperlink.vue";
import HtmlHyperlinkCode from "./components/html-hyperlink.vue?raw";
import HtmlImage from "./components/html-image.vue";
import HtmlImageCode from "./components/html-image.vue?raw";
import HtmlTable from "./components/html-table.vue";
import HtmlTableCode from "./components/html-table.vue?raw";
import HtmlList from "./components/html-list.vue";
import HtmlListCode from "./components/html-list.vue?raw";
import HtmlBlock from "./components/html-block.vue";
import HtmlBlockCode from "./components/html-block.vue?raw";
import HtmlInline from "./components/html-inline.vue";
import HtmlInlineCode from "./components/html-inline.vue?raw";
import CssSelector from "./components/css-selector.vue";
import CssSelectorCode from "./components/css-selector.vue?raw";
import CssFont from "./components/css-font.vue";
import CssFontCode from "./components/css-font.vue?raw";
import CssFontOther from "./components/css-font-other.vue";
import CssFontOtherCode from "./components/css-font-other.vue?raw";
import CssMargin from "./components/css-margin.vue";
import CssMarginCode from "./components/css-margin.vue?raw";
import CssBorder from "./components/css-border.vue";
import CssBorderCode from "./components/css-border.vue?raw";
import CssMouse from "./components/css-mouse.vue";
import CssMouseCode from "./components/css-mouse.vue?raw";
import TipBlock from "./components/elements/tip-block.vue";
import TipBlockCode from "./components/elements/tip-block.vue?raw";
import CssFloatBorder from "./components/css-float-border.vue";
import CssFloatBorderCode from "./components/css-float-border.vue?raw";
import CssChild from "./components/css-child.vue";
import CssChildCode from "./components/css-child.vue?raw";
import CssRelativeAbsolute from "./components/css-relative-absolute.vue";
import CssRelativeAbsoluteCode from "./components/css-relative-absolute.vue?raw";
import CssFlexDefine from "./components/css-flex-define.vue";
import CssFlexDefineCode from "./components/css-flex-define.vue?raw";
import CssFlexDirection from "./components/css-flex-direction.vue";
import CssFlexDirectionCode from "./components/css-flex-direction.vue?raw";
import CssFlexOverflow from "./components/css-flex-overflow.vue";
import CssFlexOverflowCode from "./components/css-flex-overflow.vue?raw";
import CssFlexFlow from "./components/css-flex-flow.vue";
import CssFlexFlowCode from "./components/css-flex-flow.vue?raw";
import CssFlexJustify from "./components/css-flex-justify.vue";
import CssFlexJustifyCode from "./components/css-flex-justify.vue?raw";
import CssFlexAlign from "./components/css-flex-align.vue";
import CssFlexAlignCode from "./components/css-flex-align.vue?raw";
import CssFlexCenter from "./components/css-flex-center.vue";
import CssFlexCenterCode from "./components/css-flex-center.vue?raw";
import VueVfor from "./components/vue-vfor.vue";
import VueVforCode from "./components/vue-vfor.vue?raw";
import VueVif from "./components/vue-vif.vue";
import VueVifCode from "./components/vue-vif.vue?raw";
import VueVtest from "./components/vue-vtest.vue";
import VueVtestCode from "./components/vue-vtest.vue?raw";
import VueVon from "./components/vue-von.vue";
import VueVonCode from "./components/vue-von.vue?raw";
import VueVbind from "./components/vue-vbind.vue";
import VueVbindCode from "./components/vue-vbind.vue?raw";
import VueVmodel from "./components/vue-vmodel.vue";
import VueVmodelCode from "./components/vue-vmodel.vue?raw";
import VueadvRef from "./components/vueadv-ref.vue";
import VueadvRefCode from "./components/vueadv-ref.vue?raw";
import VueadvTab1 from "./components/vueadv-tab1.vue";
import VueadvTab1Code from "./components/vueadv-tab1.vue?raw";
import VueadvTab2 from "./components/vueadv-tab2.vue";
import VueadvTab2Code from "./components/vueadv-tab2.vue?raw";
import VueadvAddtag from "./components/vueadv-addtag.vue";
import VueadvAddtagCode from "./components/vueadv-addtag.vue?raw";
import VueadvReactive from "./components/vueadv-reactive.vue";
import VueadvReactiveCode from "./components/vueadv-reactive.vue?raw";
import VueadvReftest from "./components/vueadv-reftest.vue";
import VueadvReftestCode from "./components/vueadv-reftest.vue?raw";
import VueadvComputed02 from "./components/vueadv-computed02.vue";
import VueadvComputed02Code from "./components/vueadv-computed02.vue?raw";
import VueadvComputed from "./components/vueadv-computed.vue";
import VueadvComputedCode from "./components/vueadv-computed.vue?raw";
import VueadvWatch from "./components/vueadv-watch.vue";
import VueadvWatchCode from "./components/vueadv-watch.vue?raw";
import VueadvWatch02 from "./components/vueadv-watch02.vue";
import VueadvWatch02Code from "./components/vueadv-watch02.vue?raw";
import VueadvDefineprops from "./components/vueadv-defineprops.vue";
import NumCode from "./components/elements/num.vue?raw";
import VueadvEmits from "./components/vueadv-emits.vue";
import VueadvEmitsCode from "./components/vueadv-emits.vue?raw";
import VueadvCompoent from "./components/vueadv-compoent.vue";
import VueadvCompoentCode from "./components/vueadv-compoent.vue?raw";


// import html from 'highlight.js/lib/languages/html'
hljs.registerLanguage('javascript', javascript)
// hljs.registerLanguage('html', html)


const theme= ref(darkTheme)
const flag = ref(false)
// function active(){const theme= ref(null)}
</script>

<template>
  <n-config-provider :theme="flag?null:darkTheme" :hljs="hljs">
    <n-space vertical size="large" >
<!--      <n-layout >-->
      <n-layout style="margin-top: -60px;">
        <n-layout-header>

          <n-card embedded>
            <n-space justify="end">

              <ThemeSwitch />   <!-- -- -->
<!--              <n-switch v-model:value="active" />-->
              <n-switch v-model:value="flag">
                <template #checked >
                  深色
                </template>
                <template #unchecked >
                  浅色
                </template>
              </n-switch>

<!--              <n-button @click="theme = darkTheme" color="#363636">-->
<!--                深色-->
<!--              </n-button>-->
<!--              <n-button @click="theme = null" color="#d3d3d3">-->
<!--                浅色-->
<!--              </n-button>-->

            </n-space>
          </n-card>

        </n-layout-header>

        <n-layout has-sider>
          <n-layout-sider content-style="padding: 240px;">

<!--            <n-card :bordered="false" embedded>-->
<!--            <div style="height: 300px">-->
              <n-anchor
                  affix
                  listen-to=".document-scroll-container"
                  :trigger-top="24"
                  :top="88"
                  style="z-index: 1; opacity: 0.3"
                  :bound="240"
              >
                <n-anchor-link title="演示" href="#演示">
                  <n-anchor-link title="基础用法" href="#basic" />
                  <n-anchor-link title="忽略间隔" href="#ignore-gap" />
                  <n-anchor-link title="固定" href="#affix" />
                  <n-anchor-link title="滚动到" href="#scrollto" />
                  <n-anchor-link title="基础用法" href="#basic" />
                  <n-anchor-link title="忽略间隔" href="#ignore-gap" />
                  <n-anchor-link title="固定" href="#affix" />
                  <n-anchor-link title="滚动到" href="#scrollto" />
                  <n-anchor-link title="基础用法" href="#basic" />
                  <n-anchor-link title="忽略间隔" href="#ignore-gap" />
                  <n-anchor-link title="固定" href="#affix" />
                  <n-anchor-link title="滚动到" href="#scrollto" />
                  <n-anchor-link title="基础用法" href="#basic" />
                  <n-anchor-link title="忽略间隔" href="#ignore-gap" />
                  <n-anchor-link title="固定" href="#affix" />
                  <n-anchor-link title="滚动到" href="#scrollto" />
                </n-anchor-link>
                <n-anchor-link title="Props" href="#Props" />
              </n-anchor>
<!--            </div>-->
<!--            </n-card>-->

          </n-layout-sider>


          <n-layout-content content-style="padding: 24px;">

            <n-scrollbar style="max-height: 780px">
            <n-grid :x-gap="4" :y-gap="8" cols="200:1 400:2 600:3 800:4 1000:5">
              <n-grid-item>

                <tip-block :tip_name="'Headline 标题标签'"
                           :file_name="'html-header'"
                           :code='HtmlHeaderCode'
                >
                  <html-header/>
                  <template #description>
                    h1 最大<br>
                    h5 最小<br>
                    br 换行
                  </template>

                </tip-block>
              </n-grid-item>
              <n-grid-item>

                <tip-block :tip_name="'Paragraph 段落标签'"
                           :file_name="'html-paragraph'"
                           :code='HtmlParagraphCode'
                >
                  <html-paragraph/>
                  <template #description>
                    段落标签会自动换行<br>
                    且行间距比较大<br>
                    p 段落<br>
                    hr 分割线<br>
                    br 段落内换行
                  </template>

                </tip-block>
              </n-grid-item>
              <n-grid-item>

                <tip-block :tip_name="'Hyperlink 超链接标签'"
                           :file_name="'html-hyperlink'"
                           :code='HtmlHyperlinkCode'
                >
                  <html-hyperlink/>
                  <template #description>
                    a 超链接<br>
                    href="" 设置地址<br>
                    target="_blank" 新窗口打开
                  </template>

                </tip-block>
              </n-grid-item>
              <n-grid-item>

                <tip-block :tip_name="'Image 图片标签'"
                           :file_name="'html-image'"
                           :code='HtmlImageCode'
                >
                  <html-image/>
                  <template #description>
                    只有单标签<br>
                    img 图片<br>
                    src="" 设置地址<br>
                    alt="展示的图片" 预备文本——图片失效时展示的文字<br>
                    width="230" 宽度<br>
                    height="150" 高度<br>
                    高度通常不需要设置即可等比缩放
                  </template>

                </tip-block>
              </n-grid-item>
              <n-grid-item>

                <tip-block :tip_name="'Table 表格标签'"
                           :file_name="'html-table'"
                           :code='HtmlTableCode'
                >
                  <html-table/>
                  <template #description>
                    table 表格<br>
                    border 边框<br>
                    tr 行元素<br>
                    td 列元素<br>
                    th 表头<br>
                  </template>

                </tip-block>
              </n-grid-item>
              <n-grid-item>

                <tip-block :tip_name="'List 列表标签'"
                           :file_name="'html-list'"
                           :code='HtmlListCode'
                >
                  <html-list/>
                  <template #description>
                    ol 有序列表<br>
                    ul 无序列表<br>
                    li 列表元素<br>
                  </template>

                </tip-block>
              </n-grid-item>
              <n-grid-item>

                <tip-block :tip_name="'Block 区块元素'"
                           :file_name="'html-block'"
                           :code='HtmlBlockCode'
                >
                  <html-block/>
                  <template #description>
                    通常会以新行开始<br>
                    div 区块容器
                  </template>

                </tip-block>
              </n-grid-item>
              <n-grid-item>

                <tip-block :tip_name="'Inline 内联元素'"
                           :file_name="'html-inline'"
                           :code='HtmlInlineCode'
                >
                  <html-inline/>
                  <template #description>
                    不会以新行开始<br>
                    span 内联容器<br>
                    b 粗体文本
                  </template>

                </tip-block>
              </n-grid-item>
              <n-grid-item>

                <tip-block :tip_name="'Selector 选择器与层级覆盖'"
                           :file_name="'css-selector'"
                           :code='CssSelectorCode'
                >
                  <css-selector/>
                  <template #description>
                    这个样式例子中<br>
                    p 标签选择器<br>
                    .paragraph 类选择器<br>
                    #paral ID选择器<br>
                    标签P ➔ 类.paragraph ➔ ID#paral
                  </template>

                </tip-block>
              </n-grid-item>
              <n-grid-item>

                <tip-block :tip_name="'Font 字体'"
                           :file_name="'css-font'"
                           :code='CssFontCode'
                >
                  <css-font/>
                  <template #description>
                    sans-serif 无衬线<br>
                    serif 有衬线<br>
                    可以属性连写
                  </template>

                </tip-block>
              </n-grid-item>
              <n-grid-item>

                <tip-block :tip_name="'Font 字体'"
                           :file_name="'css-font-other'"
                           :code='CssFontOtherCode'
                >
                  <css-font-other/>
                  <template #description>
                    font-family: 字体<br>
                    font-weight: 字粗<br>
                    font-style: 字体样式<br>
                    text-decoration: 文本修饰线<br>
                    text-transform: 大小写转换<br>
                    letter-spacing: 字间距<br>
                    word-spacing: 词间距<br>
                    line-height: 行间距<br>
                  </template>

                </tip-block>
              </n-grid-item>
              <n-grid-item>

                <tip-block :tip_name="'Margin 外边距'"
                           :file_name="'css-margin'"
                           :code='CssMarginCode'
                >
                  <css-margin/>
                  <template #description>
                    可简写<br>
                    padding 用法相同
                  </template>

                </tip-block>
              </n-grid-item>
              <n-grid-item>

                <tip-block :tip_name="'Border 边框'"
                           :file_name="'css-border'"
                           :code='CssBorderCode'
                >
                  <css-border/>
                  <template #description>
                    可简写<br>
                  </template>

                </tip-block>
              </n-grid-item>
              <n-grid-item>

                <tip-block :tip_name="'Mouse 鼠标行为'"
                           :file_name="'css-mouse'"
                           :code='CssMouseCode'
                >
                  <css-mouse/>
                  <template #description>
                    hover 经过<br>
                    active 点击<br>
                    user-select:none; 屏蔽选择
                  </template>

                </tip-block>
              </n-grid-item>
              <n-grid-item>

                <tip-block :tip_name="'Float&Border 浮动与边框'"
                           :file_name="'css-mouse'"
                           :code='CssFloatBorderCode'
                >
                  <css-float-border/>
                  <template #description>
                    <b>float会使得默认纵向排列的方式更改为了横向排列，所以设置float后，一定要加清除浮动功能的标签</b>
                    float 浮动<br>
                    border 边框<br>
                    box-sizing: border-box; 使用边框盒子作为宽度<br>
                    clear:both 清除浮动
                  </template>

                </tip-block>
              </n-grid-item>
              <n-grid-item>

                <tip-block :tip_name="'Child 子元素伪类'"
                           :file_name="'css-child'"
                           :code='CssChildCode'
                >
                  <css-child/>
                  <template #description>
                    :nth-child 子元素<br>
                    odd 奇数<br>
                    even 偶数<br>
                    (3) 第三个元素<br>
                    :first-child 第一个子元素<br>
                    :last-child 最后一个子元素<br>
                  </template>

                </tip-block>
              </n-grid-item>
              <n-grid-item>

                <tip-block :tip_name="'Relative&Absolute 相对与绝对位置'"
                           :file_name="'css-relative-absolute'"
                           :code='CssRelativeAbsoluteCode'
                >
                  <css-relative-absolute/>
                  <template #description>
                    父节点设置了相对位置关系<br>
                    子节点就会基于父节点做绝对偏移<br>
                    否则会以整个网页做关系偏移<br>
                    position 位置<br>
                    relative 相对<br>
                    absolute 绝对<br>
                    fixed 固定  当前窗口固定
                  </template>

                </tip-block>
              </n-grid-item>
              <n-grid-item>

                <tip-block :tip_name="'Flex Define 弹性盒模型定义'"
                           :file_name="'css-flex-define'"
                           :code='CssFlexDefineCode'
                >
                  <css-flex-define/>
                  <template #description>
                    父组件设置flex，控制子元素<br>
                    display: flex;<br>
                    "border-width" 属性 如果单独使用则不起作用。要先使用 "border-style" 属性来设置边框。<br>
                  </template>

                </tip-block>
              </n-grid-item>
              <n-grid-item>

                <tip-block :tip_name="'Flex Direction 排列方向'"
                           :file_name="'css-flex-direction'"
                           :code='CssFlexDirectionCode'
                >
                  <css-flex-direction/>
                  <template #description>
                    flex-direction: 排列方式<br>
                    row 横向<br>
                    column 纵向<br>
                    row-reverse 横向倒序<br>
                    column-reverse 纵向倒序
                  </template>

                </tip-block>
              </n-grid-item>
              <n-grid-item>

                <tip-block :tip_name="'Flex Overflow 溢出'"
                           :file_name="'css-flex-overflow'"
                           :code='CssFlexOverflowCode'
                >
                  <css-flex-overflow/>
                  <template #description>
                    flex-wrap: wrap 包裹折行<br>
                    wrap-reverse 倒着折
                  </template>

                </tip-block>
              </n-grid-item>
              <n-grid-item>

                <tip-block :tip_name="'Flex flow 排列折行缩写'"
                           :file_name="'css-flex-flow'"
                           :code='CssFlexFlowCode'
                >
                  <css-flex-flow/>
                  <template #description>
                    flex-flow: column wrap-reverse 纵向倒序折行<br>
                  </template>

                </tip-block>
              </n-grid-item>
              <n-grid-item>

                <tip-block :tip_name="'Flex Justify 对齐'"
                           :file_name="'css-flex-justify'"
                           :code='CssFlexJustifyCode'
                >
                  <css-flex-justify/>
                  <template #description>
                    justify-content 对齐内容<br>
                  </template>

                </tip-block>
              </n-grid-item>
              <n-grid-item>

                <tip-block :tip_name="'Flex Align 交叉轴对齐'"
                           :file_name="'css-flex-align'"
                           :code='CssFlexAlignCode'
                >
                  <css-flex-align/>
                  <template #description>
                    justify-content 对齐内容<br>
                  </template>

                </tip-block>
              </n-grid-item>
              <n-grid-item>

                <tip-block :tip_name="'Flex Center 主轴交叉轴对齐'"
                           :file_name="'css-flex-center'"
                           :code='CssFlexCenterCode'
                >
                  <css-flex-center/>
                  <template #description>
<!--                    justify-content 对齐内容<br>-->
                  </template>

                </tip-block>
              </n-grid-item>
              <n-grid-item>

                <tip-block :tip_name="'VUE v-for 迭代指令'"
                           :file_name="'vue-vfor'"
                           :code='VueVforCode'
                >
                  <vue-vfor/>
                  <template #description>
                    :key='index' 每次都要加不够麻烦的<br>
                    item 条目<br>
                    index 指针<br>
                    key 键<br>
                    value 值<br>
                    注意对象关系是反的
                  </template>

                </tip-block>
              </n-grid-item>
              <n-grid-item>

                <tip-block :tip_name="'VUE v-if v-show 分支指令'"
                           :file_name="'vue-vfor'"
                           :code='VueVifCode'
                >
                  <vue-vif/>
                  <template #description>
                    低频用v-if<br>
                    高频用v-show<br>
                    v-show 不支持template元素
                  </template>

                </tip-block>
              </n-grid-item>
              <n-grid-item>

                <tip-block :tip_name="'VUE v-text v-html'"
                           :file_name="'vue-vtest'"
                           :code='VueVtestCode'
                >
                  <vue-vtest/>
                  <template #description>
                    没鸡巴用吧
                  </template>

                </tip-block>
              </n-grid-item>
              <n-grid-item>

                <tip-block :tip_name="'VUE v-on 绑定监听事件'"
                           :file_name="'vue-von'"
                           :code='VueVonCode'
                >
                  <vue-von/>
                  <template #description>
                    @ 缩写<br>
                    v-on:事件/@事件<br>
                    事件：play()<br>
                    @click="play()"如果没有实参可以写成@click="play"<br>
                    @dblclick 双击<br>
                    @mouseover 移入<br>
                    @mouseout 移出<br>
                    @keydown.enter 键盘事件 .+按键<br>
                    <hr>
                    .stop ——调用 event.stopPropagation()。<br>
                    .prevent ——调用 event.preventDefault()。<br>
                    .capture ——在捕获模式添加事件监听器。<br>
                    .self ——只有事件从元素本身发出才触发处理函数。<br>
                    .{keyAlias} ——只在某些按键下触发处理函数。
                    .once ——最多触发一次处理函数。<br>
                    .left ——只在鼠标左键事件触发处理函数。<br>
                    .right ——只在鼠标右键事件触发处理函数。<br>
                    .middle ——只在鼠标中键事件触发处理函数。<br>
                    .passive ——通过 { passive: true } 附加一个 DOM 事件。<br>
                  </template>

                </tip-block>
              </n-grid-item>
              <n-grid-item>

                <tip-block :tip_name="'VUE v-bind 绑定'"
                           :file_name="'vue-vbind'"
                           :code='VueVbindCode'
                >
                  <vue-vbind/>
                  <template #description>
                    : 缩写<br>
                    样式名 双层引号<br>
                    函数括号不能省略
                  </template>

                </tip-block>
              </n-grid-item>
              <n-grid-item>

                <tip-block :tip_name="'VUE v-model 双向绑定'"
                           :file_name="'vue-vmodel'"
                           :code='VueVmodelCode'
                >
                  <vue-vmodel/>
                  <template #description>
                    这玩应一般就用在input里<br>
                    复选框可以指定value值<br>
                    单选框记得加name且值相同<br>
                    下拉单指定value就使用value<br>
                    <hr>
                    .lazy ——监听 change 事件而不是 input<br>
                    .number ——将输入的合法符串转为数字<br>
                    .trim ——移除输入内容两端空格<br>
                  </template>

                </tip-block>
              </n-grid-item>
              <n-grid-item>

                <tip-block :tip_name="'VUE ref 响应式与函数式'"
                           :file_name="'vueadv-ref'"
                           :code='VueadvRefCode'
                >
                  <vueadv-ref/>
                  <template #description>
                    ref(100) 响应数据
                  </template>

                </tip-block>
              </n-grid-item>
              <n-grid-item>

                <tip-block :tip_name="'VUE setup 语法糖'"
                           :file_name="'vueadv-tab1'"
                           :code='VueadvTab1Code'
                >
                  <vueadv-tab1/>
                  <template #description>

                  </template>

                </tip-block>
              </n-grid-item>
              <n-grid-item>

                <tip-block :tip_name="'VUE setup 语法糖'"
                           :file_name="'vueadv-tab2'"
                           :code='VueadvTab2Code'
                >
                  <vueadv-tab2/>
                  <template #description>

                  </template>

                </tip-block>
              </n-grid-item>
              <n-grid-item>

                <tip-block :tip_name="'VUE setup 语法糖'"
                           :file_name="'vueadv-addtag'"
                           :code='VueadvAddtagCode'
                >
                  <vueadv-addtag/>
                  <template #description>

                  </template>

                </tip-block>
              </n-grid-item>
              <n-grid-item>

                <tip-block :tip_name="'VUE reactive函数'"
                           :file_name="'vueadv-reactive'"
                           :code='VueadvReactiveCode'
                >
                  <vueadv-reactive/>
                  <template #description>

                  </template>

                </tip-block>
              </n-grid-item>
              <n-grid-item>

                <tip-block :tip_name="'VUE ref DOM引用'"
                           :file_name="'vueadv-reftest'"
                           :code='VueadvReftestCode'
                >
                  <vueadv-reftest/>
                  <template #description>

                  </template>

                </tip-block>
              </n-grid-item>
              <n-grid-item>

                <tip-block :tip_name="'VUE computed 计算属性'"
                           :file_name="'vueadv-computed02'"
                           :code='VueadvComputed02Code'
                >
                  <vueadv-computed02/>
                  <template #description>

                  </template>

                </tip-block>
              </n-grid-item>
              <n-grid-item>

                <tip-block :tip_name="'VUE computed 计算属性'"
                           :file_name="'vueadv-computed'"
                           :code='VueadvComputedCode'
                >
                  <vueadv-computed/>
                  <template #description>

                  </template>

                </tip-block>
              </n-grid-item>
              <n-grid-item>

                <tip-block :tip_name="'VUE watch 监听'"
                           :file_name="'vueadv-watch02'"
                           :code='VueadvWatch02Code'
                >
                  <vueadv-watch02/>
                  <template #description>

                  </template>

                </tip-block>
              </n-grid-item>
              <n-grid-item>

                <tip-block :tip_name="'VUE watch 监听和清除监听'"
                           :file_name="'vueadv-watch'"
                           :code='VueadvWatchCode'
                >
                  <vueadv-watch/>
                  <template #description>

                  </template>

                </tip-block>
              </n-grid-item>
              <n-grid-item>

                <tip-block :tip_name="'VUE defineProps 组件及传参_父->子'"
                           :file_name="'num'"
                           :code='NumCode'
                >
                  <vueadv-defineprops/>
                  <template #description>

                  </template>

                </tip-block>
              </n-grid-item>
              <n-grid-item>
]                <tip-block :tip_name="'VUE emission 组件及传参_子->父'"
                           :file_name="'vueadv-emits'"
                           :code='VueadvEmitsCode'
                >
                  <vueadv-emits/>
                  <template #description>

                  </template>

                </tip-block>
              </n-grid-item>
              <n-grid-item>
                <tip-block :tip_name="'VUE Compoent 动态组件'"
                           :file_name="'vueadv-compoent'"
                           :code='VueadvCompoentCode'
                >
                  <vueadv-compoent/>
                  <template #description>

                  </template>

                </tip-block>
              </n-grid-item>
              <n-grid-item>
                <div class="light-green">
                  1
                </div>
              </n-grid-item>
              <n-grid-item>
                <div class="green">
                  2
                </div>
              </n-grid-item>
              <n-grid-item>
                <div class="light-green">
                  3
                </div>
              </n-grid-item>
              <n-grid-item>
                <div class="green">
                  4
                </div>
              </n-grid-item>
              <n-grid-item>
                <div class="light-green">
                  5
                </div>
              </n-grid-item>
              <n-grid-item>
                <div class="green">
                  6
                </div>
              </n-grid-item>
              <n-grid-item>
                <div class="light-green">
                  1
                </div>
              </n-grid-item>
              <n-grid-item>
                <div class="green">
                  2
                </div>
              </n-grid-item>
              <n-grid-item>
                <div class="light-green">
                  3
                </div>
              </n-grid-item>
              <n-grid-item>
                <div class="green">
                  4
                </div>
              </n-grid-item>
              <n-grid-item>
                <div class="light-green">
                  5
                </div>
              </n-grid-item>
              <n-grid-item>
                <div class="green">
                  6
                </div>
              </n-grid-item>

            </n-grid>
            </n-scrollbar>
          </n-layout-content>

        </n-layout>

        <n-layout-footer >
          <n-space justify="center">
            <n-card :bordered="false" embedded>
              <n-pagination v-model:page="page" :page-count="100" />
            </n-card>
          </n-space>
        </n-layout-footer>
      </n-layout>

    </n-space>
  </n-config-provider>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.light-green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.12);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.24);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
