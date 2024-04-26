<script lang="tsx" setup>
// import { Button } from '@src/components/ui/button'
const title = 'test'

</script>
<template>
  <Html>
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" content="太陽系男團-原子少年 Atom Boyz人氣票選就在beanfun! ，beanfun!用戶登入beanfun! APP或活動網頁就可進行投票。現在搶先下載beanfun! APP並完成註冊，票數直接多5倍，只要輕鬆完成任務及分享還可獲得額外票數。 be here for FUN! 好玩的都在這。" />
      <Meta name="keywords" content="原子少年、bean!、男團、好玩的都在這、太陽系男團人氣票選、Atom Boyz、八大行星、周湯豪、Ella、坤達、be here for FUN!" />
      <Meta name="url" content="https://atomboyz.beanfun.com/" />
      <Meta property="og:title" :content="title" />
      <Meta property="og:image" content="/assets/img/og.jpeg" />
      <Meta property="og:description" content="太陽系男團人氣票選，下載beanfun! APP投票票數多五倍，beanfun! 好玩的都在這！" />
      <Meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0;" name="viewport" />

      <!-- <Meta v-if="route.name == 'vote' && (route.query.p > 0 && route.query.p <= 80)"
      property="og:title"
      :content="`原子少年 Atom Boyz ${peopleNames[route.query.p]} 就快第一名了！ 拜託幫我偶像投一票 beanfun! 好玩的都在這～`" />
      <Meta v-if="route.name == 'vote' && (route.query.p > 0 && route.query.p <= 80)"
      property="og:image"
      :content="`/_admin/upload/${route.query.p}.jpg`" />
      <Meta http-equiv="Content-Security-Policy" content="default-src *"/> -->
    </Head>
    <NuxtLayout>
      <NuxtPage />
      <Button>kkk</Button>
    </NuxtLayout>
  </Html>
</template>
