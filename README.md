# TPage
TPage.js is a JavaScript library for paging tables with array values, objects and values set in the DOM. <br><br>
To use this tool just include downloading src/main.js and include it in the application header as a script:src and access the functions available below. <br><br>
In future versions the library will have npm support. <br><br>

## Available models
<ul>
  <li>Simple paging</li>
  <li>Selected paging</li>
</ul>

<br>

## Simple Paging
Simple pagination is based on <a href="https://i2.wp.com/blog.clares.com.br/wp-content/uploads/2010/05/tb.png">this template</a>. <br><br>
All you need to do is call the <strong>spage(1, 2, 3, 4, 5)</strong> function and put the following parameters in exactly the following order: 

<ol>
  <li>Array or object to be paged</li>
  <li>Initial position (Begin / from)</li>
  <li>Final position (End / to)</li>
  <li>Range value (This parameter defines the number of elements the table will have at one time)</li>
  <li>Array keys</li>
</ol>

To set the array keys it is necessary to send a variable specifying the key type (index or assoc) and the total number of items or its associations (separated by :), follow the examples:

<ul>
  <li><strong>Index type: </strong> var arrayKeys = 'index:4'</li>
  <li><strong>Associative type: </strong> var arraykeys = 'assoc:id,author,project,description'</li>
</ul>

### Remarks and warnings
* It is recommended that the range is equal to the value of item 3.
* Html structure needed to work: <br> <img src="https://user-images.githubusercontent.com/77009586/125145580-2314a980-e0f8-11eb-9768-8f8cc04ecfce.PNG" />

<br>

## Selected paging
Selected pagination is based on <a href="https://zerobugs.com.br/wp-content/uploads/2017/06/dica-da-semana-4-dica-da-semana-4-busca-filtragem-paginacao-e-estilizacao-rapida-de-tabelas-com-o-datatables-57.jpg">this template</a>. <br><br>
All you need to do is call the <strong>spage(1, 2, 3, 4, 5)</strong> function and put the following parameters in exactly the following order: 

<ol>
  <li>Array or object to be paged</li>
  <li>Range value (This parameter defines the number of elements the table will have at one time)</li>
  <li>Default final position (End / to)</li>
  <li>Maximum number of 'option' in 'select' (must be a multiple of the item 3)</li>
  <li>Array keys</li>
</ol>

To set the array keys it is necessary to send a variable specifying the key type (index or assoc) and the total number of items or its associations (separated by :), follow the examples:

<ul>
  <li><strong>Index type: </strong> var arrayKeys = 'index:4'</li>
  <li><strong>Associative type: </strong> var arraykeys = 'assoc:id,author,project,description'</li>
</ul>

### Remarks and warnings
* It is recommended that the range is equal to the value of item 3.
* Html structure needed to work: <br> <img src="https://user-images.githubusercontent.com/77009586/125145647-7129ad00-e0f8-11eb-8cdb-83f7f7377ac5.PNG"/>
