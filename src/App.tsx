import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from '@/context/CartContext'
import { Layout } from '@/components/layout/Layout'
import Home from '@/pages/Home'
import Teas from '@/pages/Teas'
import TeaDetail from '@/pages/TeaDetail'
import OurStory from '@/pages/OurStory'
import Experience from '@/pages/Experience'
import Contact from '@/pages/Contact'
import Wholesale from '@/pages/Wholesale'
import Cart from '@/pages/Cart'
import NotFound from '@/pages/NotFound'

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="teas" element={<Teas />} />
            <Route path="teas/:slug" element={<TeaDetail />} />
            <Route path="our-story" element={<OurStory />} />
            <Route path="experience" element={<Experience />} />
            <Route path="contact" element={<Contact />} />
            <Route path="wholesale" element={<Wholesale />} />
            <Route path="cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}
