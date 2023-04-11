<template>
  <div class="discovery"> 

    <div class="book-marks">
    <h1>{{ books.myBooks.title }}</h1>
  <carousel 
    ref="carousel"
    :perPageCustom="[[768, 3], [1024, 5]]"  
    :paginationEnabled="false"
    >
  <slide v-for="book in books.myBooks.stars" :key="book.id + 1" class="teste">
    
    <div class="slide-container">
      <div><p class="text-center">{{ book.title }}</p>
    <span class="fa fa-star" ></span></div>
    
    <p class="updated">{{ book.updated }}</p>
    </div>
   
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
    <h1>{{ books.vue.categorie }} 
        <b-dropdown aria-role="list" v-model="typeSort" >
            <template #trigger="{ active }">
                <b-button
                  class="button-toggle"
                    :focusable="false"
                    :icon-right="active ? 'menu-up' : 'menu-down'"   size="is-large"> <i class="fa fa-angle-down" aria-hidden="true"></i></b-button>
            </template>


            <b-dropdown-item aria-role="listitem" value="stars"    @click="sort(typeSort, 'vue')">Sort by stars</b-dropdown-item>
            <b-dropdown-item aria-role="listitem" value="updated "  @click="sort(typeSort, 'vue')">Sort by updated</b-dropdown-item>
        </b-dropdown> 
      
    </h1>
  <carousel 
    ref="carousel"
    :perPageCustom="[[768, 3], [1024, 5]]"  
    :paginationEnabled="false"
    >
  <slide v-for="book in books.vue.books" :key="book.id + 1" class="slide">
    
    <div class="slide-container">
      <div><p class="text-center">{{ book.title }}</p>
    <span   :class="book.star ?'fa fa-star icon-star icon-star':'fa fa-star-o icon-star icon-star'" @click="starBook(book)" ></span></div>
    
    <p class="updated">{{ book.updated }}</p>
    </div>
   
 
   
  </slide>
 
</carousel>
 </div>
 
 <div class="typescript" v-show="toogleTypescript">
    <h1>{{ books.typescript.categorie }}
      <b-dropdown aria-role="list" v-model="typeSort" >
            <template #trigger="{ active }">
                <b-button
                    class="button-toggle"
                    :focusable="false"
                    :icon-right="active ? 'menu-up' : 'menu-down'"   size="is-large"> <i class="fa fa-angle-down" aria-hidden="true"></i></b-button>
            </template>


            <b-dropdown-item aria-role="listitem" value="stars"    @click="sort(typeSort, 'typescript')">Sort by stars</b-dropdown-item>
            <b-dropdown-item aria-role="listitem" value="updated "  @click="sort(typeSort, 'typescript')">Sort by updated</b-dropdown-item>
        </b-dropdown>
    </h1>
  <carousel 
    ref="carousel"
    :perPageCustom="[[768, 3], [1024, 5]]"  
    :paginationEnabled="false"
    >
  <slide v-for="book in books.typescript.books" :key="book.id + 1" class="slide">
    
    <div class="slide-container">
      <div><p class="text-center">{{ book.title }}</p>
    <span   :class="book.star ?'fa fa-star icon-star icon-star':'fa fa-star-o icon-star icon-star'" @click="starBook(book)" ></span></div>
    
    <p class="updated">{{ book.updated }}</p>
    </div>
   
   
  </slide>
 
</carousel>
 </div>
 <div class="javascript" v-show="toogleJavascript">
    <h1>{{ books.javascript.categorie }}
      <b-dropdown aria-role="list" v-model="typeSort" >
            <template #trigger="{ active }">
                <b-button
                   class="button-toggle"
                    :focusable="false"
                    :icon-right="active ? 'menu-up' : 'menu-down'"   size="is-large"> <i class="fa fa-angle-down" aria-hidden="true"></i></b-button>
            </template>


            <b-dropdown-item aria-role="listitem" value="stars"    @click="sort(typeSort, 'javascript')">Sort by stars</b-dropdown-item>
            <b-dropdown-item aria-role="listitem" value="updated "  @click="sort(typeSort, 'javascript')">Sort by updated</b-dropdown-item>
        </b-dropdown>
    </h1>
  <carousel 
    ref="carousel"
    :perPageCustom="[[768, 3], [1024, 5]]"  
    :paginationEnabled="false"
    >
  <slide v-for="book in books.javascript.books" :key="book.id + 1" class="slide">
    
    <div class="slide-container">
      <div><p class="text-center">{{ book.title }}</p>
    <span   :class="book.star ?'fa fa-star icon-star icon-star':'fa fa-star-o icon-star icon-star'" @click="starBook(book)" ></span></div>
    
    <p class="updated">{{ book.updated }}</p>
    </div>
   
   
   
  </slide>
 
</carousel>
 </div>
 <div class="go" v-show="toogleGo">
    <h1>{{ books.go.categorie }}
      <b-dropdown aria-role="list" v-model="typeSort" >
            <template #trigger="{ active }">
                <b-button
                    class="button-toggle"
                    :focusable="false"
                    :icon-right="active ? 'menu-up' : 'menu-down'"   size="is-large"> <i class="fa fa-angle-down" aria-hidden="true"></i></b-button>
            </template>


            <b-dropdown-item aria-role="listitem" value="stars"    @click="sort(typeSort, 'go')">Sort by stars</b-dropdown-item>
            <b-dropdown-item aria-role="listitem" value="updated "  @click="sort(typeSort, 'go')">Sort by updated</b-dropdown-item>
        </b-dropdown>
    </h1>
  <carousel 
    ref="carousel"
    :perPageCustom="[[768, 3], [1024, 5]]"  
    :paginationEnabled="false"
    >
  <slide v-for="book in books.go.books" :key="book.id + 1" class="slide">
    
    <div class="slide-container">
      <div><p class="text-center">{{ book.title }}</p>
    <span   :class="book.star ?'fa fa-star icon-star icon-star':'fa fa-star-o icon-star icon-star'" @click="starBook(book)" ></span></div>
    
    <p class="updated">{{ book.updated }}</p>
    </div>
   
   
  </slide>
 
</carousel>
 </div>
 <div class="css" v-show="toogleCss">
    <h1>{{ books.css.categorie }}
      <b-dropdown aria-role="list" v-model="typeSort" >
            <template #trigger="{ active }">
                <b-button
                    class="button-toggle"
                    :focusable="false"
                    :icon-right="active ? 'menu-up' : 'menu-down'"   size="is-large"> <i class="fa fa-angle-down" aria-hidden="true"></i></b-button>
            </template>
            <b-dropdown-item aria-role="listitem" value="stars"    @click="sort(typeSort, 'css')">Sort by stars</b-dropdown-item>
            <b-dropdown-item aria-role="listitem" value="updated "  @click="sort(typeSort, 'css')">Sort by updated</b-dropdown-item>
        </b-dropdown>
    </h1>
  <carousel 
    ref="carousel"
    :perPageCustom="[[768, 3], [1024, 5]]"  
    :paginationEnabled="false"
    >
  <slide v-for="book in books.css.books" :key="book.id + 1" class="slide">
    
    <div class="slide-container">
      <div><p class="text-center">{{ book.title }}</p>
    <span   :class="book.star ?'fa fa-star icon-star icon-star':'fa fa-star-o icon-star icon-star'" @click="starBook(book)" ></span></div>
    
    <p class="updated">{{ book.updated }}</p>
    </div>
   
   
   
  </slide>
 
</carousel>
 </div>
 <div class="node" v-show="toogleNode">
    <h1>{{ books.node.categorie }}
      <b-dropdown aria-role="list" v-model="typeSort" >
            <template #trigger="{ active }">
                <b-button
                    class="button-toggle"
                    :focusable="false"
                    :icon-right="active ? 'menu-up' : 'menu-down'"   size="is-large"> <i class="fa fa-angle-down" aria-hidden="true"></i></b-button>
            </template>
            <b-dropdown-item aria-role="listitem" value="stars"    @click="sort(typeSort, 'node')">Sort by stars</b-dropdown-item>
            <b-dropdown-item aria-role="listitem" value="updated "  @click="sort(typeSort, 'node')">Sort by updated</b-dropdown-item>
        </b-dropdown>
    </h1>
  <carousel 
    ref="carousel"
    :perPageCustom="[[768, 3], [1024, 5]]"  
    :paginationEnabled="false"
    >
  <slide v-for="book in books.node.books" :key="book.id + 1" class="slide">
    <div class="slide-container">
      <div><p class="text-center">{{ book.title }}</p>
    <span   :class="book.star ?'fa fa-star icon-star icon-star':'fa fa-star-o icon-star icon-star'" @click="starBook(book)" ></span></div>
    
    <p class="updated">{{ book.updated }}</p>
    </div>
   
  </slide>
 
</carousel>
 </div>
 </div>
</template>

<script>
import books from '@/data/books.json';
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
      typeSort: null
  
        
   }
  },

  methods: {
    sort(typeSort, itemSort) {
      if(itemSort == `vue`) {
        this.books.vue.books.sort(function (a, b) {
    
    if(typeSort == 'stars'){
     if (a.star < b.star) {
       
       return 1;
     }
     if (a.star > b.star) {
       return -1;
     }
     
    }
    else {
       if (a.updated < b.updated) {
       
       return 1;
     }
     if (a.updated > b.updated) {
       return -1;
     }
   
     }
     return 0;
   
   });
        
      }
      else if(itemSort == 'typescript') {
        console.log('aqui')
        this.books.typescript.books.sort(function (a, b) {
    
    if(typeSort == 'stars'){
     if (a.star < b.star) {
       
       return 1;
     }
     if (a.star > b.star) {
       return -1;
     }
     
    }
    else {
       if (a.updated < b.updated) {
       
       return 1;
     }
     if (a.updated > b.updated) {
       return -1;
     }
   
     }
     return 0;
   
   });
      }
      else if(itemSort == 'javascript') {
        console.log('aqui')
        this.books.javascript.books.sort(function (a, b) {
    
    if(typeSort == 'stars'){
     if (a.star < b.star) {
       
       return 1;
     }
     if (a.star > b.star) {
       return -1;
     }
     
    }
    else {
       if (a.updated < b.updated) {
       
       return 1;
     }
     if (a.updated > b.updated) {
       return -1;
     }
   
     }
     return 0;
   
   });
      }
      else if(itemSort == 'go') {
        console.log('aqui')
        this.books.go.books.sort(function (a, b) {
    
    if(typeSort == 'stars'){
     if (a.star < b.star) {
       
       return 1;
     }
     if (a.star > b.star) {
       return -1;
     }
     
    }
    else {
       if (a.updated < b.updated) {
       
       return 1;
     }
     if (a.updated > b.updated) {
       return -1;
     }
   
     }
     return 0;
   
   });
      }
      else if(itemSort == 'css') {
        console.log('aqui')
        this.books.css.books.sort(function (a, b) {
    
    if(typeSort == 'stars'){
     if (a.star < b.star) {
       
       return 1;
     }
     if (a.star > b.star) {
       return -1;
     }
     
    }
    else {
       if (a.updated < b.updated) {
       
       return 1;
     }
     if (a.updated > b.updated) {
       return -1;
     }
   
     }
     return 0;
   
   });
      }
      else  {
        this.books.node.books.sort(function (a, b) {
    
    if(typeSort == 'stars'){
     if (a.star < b.star) {
       
       return 1;
     }
     if (a.star > b.star) {
       return -1;
     }
     
    }
    else {
       if (a.updated < b.updated) {
       
       return 1;
     }
     if (a.updated > b.updated) {
       return -1;
     }
   
     }
     return 0;
   
   });
      }
    },
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