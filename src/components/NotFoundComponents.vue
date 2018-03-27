<template>
    <div>
        <div>{{title}}</div>
        <p>{{ msg }}</p>
    </div>
</template>
<script>
export default {
  name: 'NotFoundComponents',
  data(){
      return{
          title: 'Page Not Found',
          msg: 'Whoops! Something went wrong. Please check the URL. :)'
      }
  }
}
</script>
