import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'
import Thumbnail from '../images/blog22.jpg'
const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className="container post-detail__container">
        <div className="post-detail__header">
          <PostAuthor />
          <div className="post-detail__buttons">
            <Link to={'posts/werwer/edit'} className='btn sm primary'>Edit</Link>
            <Link to={'posts/werwer/delete'} className='btn sm danger'>Delete</Link>
          </div>
        </div>
        <h1>This is the post title!</h1>
        <div className='post-detail__thumbnail'>
          <img src={Thumbnail} alt="" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad vitae vero eum. Voluptatibus ab eum error laudantium rerum a, corporis molestiae nesciunt, iusto praesentium eligendi ad hic rem nihil mollitia sunt assumenda quaerat! Ratione fugit eaque dolorem sint illo aut.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nobis consequuntur minima accusamus obcaecati ipsam labore adipisci, possimus nulla voluptatibus odio quibusdam! Vero molestiae architecto ipsam dolore, eveniet, totam in ipsa veritatis quo sint accusamus inventore ratione, saepe laudantium? Et animi aliquam velit magni ex ullam assumenda eius, maiores quasi, laborum libero, neque repellendus tenetur.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vero reprehenderit aut doloribus non ratione praesentium tempore consequuntur enim pariatur hic ducimus eius autem ea deserunt inventore, cupiditate possimus dolores commodi veritatis fugiat modi voluptas. Sed dolorem, pariatur dignissimos esse porro obcaecati exercitationem modi magni nisi ex perspiciatis ab est cumque sunt corporis. Reprehenderit impedit similique quo reiciendis a eaque facilis aperiam eius, consectetur esse expedita non inventore, quam debitis dolorum! Consequatur, distinctio amet veniam necessitatibus dolore quod, provident harum doloribus perferendis quas architecto laboriosam sint, repellendus excepturi quae ad eaque consectetur deleniti laudantium voluptatibus inventore earum voluptatem blanditiis vero! Pariatur accusamus nam similique blanditiis excepturi neque quod magni a voluptatem!
        </p>

      
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. In nobis nostrum aperiam asperiores ea iste facilis cupiditate tenetur deserunt mollitia.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, cum sint iure quae fuga quisquam nihil dolor. Repellat architecto dolorem inventore, harum minus, cum ipsam doloribus totam eveniet ratione rem vero. Corrupti eos nobis aliquid exercitationem omnis quod nostrum harum architecto vero similique molestias possimus deserunt nisi voluptas commodi placeat minima, atque dolorem, iste porro quam. Voluptates id quis deleniti iusto vel tempora fuga delectus consequatur! Veritatis, autem harum voluptate fugit ut adipisci aliquam voluptatibus nesciunt impedit illo ducimus nisi, ab eligendi! Repellendus nisi amet quos cupiditate tenetur deleniti, et laborum exercitationem cumque ad a itaque non? Deserunt iure nesciunt, ipsum, nisi corporis voluptas quaerat eligendi esse ex cupiditate cum veniam dolorem ipsam laboriosam magni rerum, temporibus laborum modi dolores officiis sed dignissimos expedita distinctio. Soluta qui magnam blanditiis nulla illum minus cum expedita! Rem in doloribus vel! Reprehenderit autem quod rem, nobis dolorum qui ea dolorem expedita? Corrupti, cum quos accusamus blanditiis modi, sapiente dolorum unde architecto quibusdam consequuntur quas sint esse at minima alias suscipit aspernatur. Perferendis quae esse doloremque sequi reiciendis vel officia ipsam mollitia? Eius sunt velit reprehenderit, et odit suscipit totam quo laborum magni voluptatum hic atque amet quae! Molestias deleniti sapiente unde expedita vero?
      </p>
      </div>
    </section>
  )
}

export default PostDetail