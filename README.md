# **BUYI PROJECT**

## Project composition
  - Frontend: React
  - Backend: Firebase
  - Payment: Stripe
  - Deployment: Netlify

## User stories
- User can add a product to cart
- User can delete a product from cart
- User can change quantity of product in cart
- User can order one or many products
- User can login and register
- User can see all its previous orders
- User can add product if admin
- User can delete product of admin
- User can edit product if admin
- User can filter products 
- User can sort products by date, by name, by price

## Frontent

### Routes:
 - Home: '/'
 - SingleProduct: '/product/:id'
 - Category: '/category/:catid'
 - Cart: '/cart'

### Components:

- **Layout**:
    - Header
        - Navbar
    - Footer
        - Column List
        - Newsletter
- **Home**: 
    - Hero section
- **SingleProduct**:
    - Showcase
    - AddToCart
    - Description
    - Gallery
    - Similar
        - SimilarItem
- **Category**:
    - Filter
        - PriceFilter
        - SizeFilter
        - ColorFilter
    - SortList
- **Cart**
    - CartTable
    - CartRow
- **AddProduct**:
    - UploadImage
    - AddForm
-**AdminProducts**
    - ProductTable
    - AdminProduct
- **Login/Register**
- **Shared**:
    - ProductList
        - Product
    - CallToAction
    - Heading
    - Modal
    - FloatingButton

### Redux

**Actions**: 
- getProducts
- addproduct
- editProduct
- deleteProduct
- registerUser
- loginUser
- getUserOrders
- getCategories
- getProductsFromCategories

### Functionalities
- Add to Cart
- Delete from Cart
- Filter products
- Change quantity in cart
- Number of products in cart

### Design
SCSS stylesheet foreach components or styled components or each components has its own inline CSS ???

### Backend
FIREBASE
**Database**:
- users
    - email address: string
    - firstname: string
    - lastname: string
    - billing address: string
    - shipping address: string
    - admin: boolean
- products
    - name: string
    - thumbnail:string
    - price: number
    - description: string
    - colors: array of name (string) and stock (number)
    - sizes: array of dimensions (number) and stock (number)
    - gallery: array of strings
    - created_at: timestamp
    - created_by: string
- orders
    - userId: string
    - products: array of objects of productId (string) and total (number)
    - total: number
    - date: timestamp

**Storage**:
 - products

**Functions**
- Make user an admin

**DO NOT FORGET TO CHANGE FIREBASE RULES!!!**
## Deployment
Netlify

## VIDEOS
### VIDEO 1
Introduction
### VIDEO 2
- Start sketching the website
- Choose colors
- Web design

### VIDEO 3
1. Create a folder called buyi in your pc
1. init project and create a Github repository
```javascript
npm init 
```
2. Create a react app
```javascript
create-react-app buyi
```
3. Install all dependecies
```javascript
npm install bootstrap reactstrap react-router-dom react-redux-firebase redux-firestore redux redux-thunk react-redux firebase moment react-moment 
```
4. Clean up React project
5. Setup the main structure of the app
6. Add routing to App.js

### VIDEO 4
Create shared components 
- Header
- Footer
- Styling

### VIDEO 5
Create the homepage with dummy content




