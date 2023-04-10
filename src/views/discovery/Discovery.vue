<template>
  <div class="discovery"> 

    <div class="book-marks">
    <h1>{{ books.myBooks.title }}</h1>
  <carousel 
    ref="carousel"
    :perPageCustom="[[768, 3], [1024, 5]]"  
    :paginationEnabled="false"
    >
  <slide v-for="book in books.myBooks.stars" :key="book.id + 1">
    
    <p class="text-center">{{ book.title }}</p>
    <span class="fa fa-star"></span>
   
  </slide>
 
</carousel>
 </div>
 <ul class="toogle">

  <li><b-button rounded class="is-secondary" @click="toogleVue=!toogleVue" :class="toogleVue ? 'color-toogle': ''">Vue</b-button></li>
  <li ><b-button rounded class="is-secondary" @click="toogleTypescript=!toogleTypescript" :class="toogleTypescript ? 'color-toogle': ''">Typescrypt</b-button></li>
  <li ><b-button rounded class="is-secondary" @click="toogleJavascript=!toogleJavascript" :class="toogleJavascript ? 'color-toogle': ''">Javascript</b-button></li>
  <li ><b-button rounded class="is-secondary" @click="toogleGo=!toogleGo" :class="toogleGo ? 'color-toogle': ''">Go</b-button></li>
  <li ><b-button rounded class="is-secondary" @click="toogleCss=!toogleCss" :class="toogleCss ? 'color-toogle': ''">Css</b-button></li>
  <li ><b-button rounded class="is-secondary" @click="toogleNode=!toogleNode" :class="toogleNode ? 'color-toogle': ''">Node</b-button></li>
 </ul>

 <div class="vue"  v-show="toogleVue">
    <h1>{{ books.vue.categorie }}</h1>
  <carousel 
    ref="carousel"
    :perPageCustom="[[768, 3], [1024, 5]]"  
    :paginationEnabled="false"
    >
  <slide v-for="book in books.vue.books" :key="book.id + 1">
    
    <p class="text-center">{{ book.title }}</p>
    <span :class="book.star ?'fa fa-star':'fa fa-star-o'" @click="starBook(book)"></span>
   
  </slide>
 
</carousel>
 </div>
 
 <div class="typescript" v-show="toogleTypescript">
    <h1>{{ books.typescript.categorie }}</h1>
  <carousel 
    ref="carousel"
    :perPageCustom="[[768, 3], [1024, 5]]"  
    :paginationEnabled="false"
    >
  <slide v-for="book in books.typescript.books" :key="book.id + 1">
    
    <p class="text-center">{{ book.title }}</p>
    <span :class="book.star ?'fa fa-star':'fa fa-star-o'" @click="starBook(book)"></span>
   
  </slide>
 
</carousel>
 </div>
 <div class="javascript" v-show="toogleJavascript">
    <h1>{{ books.javascript.categorie }}</h1>
  <carousel 
    ref="carousel"
    :perPageCustom="[[768, 3], [1024, 5]]"  
    :paginationEnabled="false"
    >
  <slide v-for="book in books.javascript.books" :key="book.id + 1">
    
    <p class="text-center">{{ book.title }}</p>
    <span :class="book.star ?'fa fa-star':'fa fa-star-o'" @click="starBook(book)"></span>
   
  </slide>
 
</carousel>
 </div>
 <div class="go" v-show="toogleGo">
    <h1>{{ books.go.categorie }}</h1>
  <carousel 
    ref="carousel"
    :perPageCustom="[[768, 3], [1024, 5]]"  
    :paginationEnabled="false"
    >
  <slide v-for="book in books.go.books" :key="book.id + 1">
    
    <p class="text-center">{{ book.title }}</p>
    <span :class="book.star ?'fa fa-star':'fa fa-star-o'" @click="starBook(book)"></span>
   
  </slide>
 
</carousel>
 </div>
 <div class="css" v-show="toogleCss">
    <h1>{{ books.css.categorie }}</h1>
  <carousel 
    ref="carousel"
    :perPageCustom="[[768, 3], [1024, 5]]"  
    :paginationEnabled="false"
    >
  <slide v-for="book in books.css.books" :key="book.id + 1">
    
    <p class="text-center">{{ book.title }}</p>
    <span :class="book.star ?'fa fa-star':'fa fa-star-o'" @click="starBook(book)"></span>
   
  </slide>
 
</carousel>
 </div>
 <div class="node" v-show="toogleNode">
    <h1>{{ books.node.categorie }}</h1>
  <carousel 
    ref="carousel"
    :perPageCustom="[[768, 3], [1024, 5]]"  
    :paginationEnabled="false"
    >
  <slide v-for="book in books.node.books" :key="book.id + 1">
    
    <p class="text-center">{{ book.title }}</p>
    <span :class="book.star ?'fa fa-star':'fa fa-star-o'" @click="starBook(book)"></span>
   
  </slide>
 
</carousel>
 </div>
 </div>
</template>

<script>
import books from '@/data/books.json'
export default {
  name: "DiscoveryPage",
  data(){
    return {
      books: books,
      toogleVue: true,
      toogleTypescript: false,
      toogleJavascript: true,
      toogleCss: false,
      toogleGo: false,
      toogleNode: false,
  
        
   }
  },
  methods: {
    starBook(book) {
    book.star = ! book.star 
    if( book.star) {
      this.books.myBooks.stars.push(book)
    }
   else {
    this.books.myBooks.stars.splice(this.books.myBooks.stars.indexOf(book), 1)
   }
  }
   
  }
}
</script>

<style>

</style>