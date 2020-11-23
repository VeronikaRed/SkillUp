import { Component, createRef } from 'react';
import { Title } from './components/Title/Title';

import './App.scss';

const DEFAULT_POSTS = [
    {
        id: 1,
        title: 'Welcome to our App!',
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
    incidunt minus quae nisi et temporibus dicta, commodi,
    doloremque maiores cupiditate omnis culpa iusto ratione
    consequatur architecto voluptatem sed eveniet tempora!
    Similique, commodi delectus. Id impedit et a nostrum laborum,
    dicta itaque, corporis voluptas possimus sit dolorem aut autem,
    maiores libero!`,
        amount: 23
    },
    {
        id: 2,
        title: 'Hello World!',
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
    incidunt minus quae nisi et temporibus dicta, commodi,
    doloremque maiores cupiditate omnis culpa iusto ratione
    consequatur architecto voluptatem sed eveniet tempora!
    Similique, commodi delectus.!`,
        amount: 45
    },
    {
        id: 3,
        title: 'Last post!',
        text: `Cum incidunt minus quae nisi et temporibus dicta, commodi,
    doloremque maiores cupiditate omnis culpa iusto ratione
    consequatur architecto voluptatem sed eveniet tempora!
    Similique, commodi delectus.!`,
        amount: 100
    }
];

export class App extends Component {
    state = {
        posts: DEFAULT_POSTS,
        postsAmount: 3,
        showPosts: true,
        login: ''
    };
    InputNameRef = createRef();

    handleRemovePost(postId) {
        const { posts } = this.state;
        const filteredPosts = posts.filter(p => p.id !== postId);
        this.setState({
            posts: filteredPosts,
            postsAmount: filteredPosts.length
        });
    }
    handleTogglePosts = () => {
        const { showPosts } = this.state;
        this.setState({ showPosts: !showPosts });
    };
    handleChangeInput = e => {
        this.setState({ login: e.target.value });
    };

    render() {
        const { posts, showPosts, postsAmount, login } = this.state;

        return (
            <div className="app">
                <button type="button" onClick={this.handleTogglePosts}>
                    {showPosts ? 'Hide posts' : 'Show posts'}
                </button>

                <div>
                    <span>Post Amount:</span> <span>{postsAmount}</span>
                </div>
                <div>
                    <input
                        type="text"
                        name="login"
                        placeholder="Login"
                        autoComplete="off"
                        value={this.handleChangeInput}
                    />
                </div>

                {showPosts &&
                    posts.map((post, i) => (
                        <div className="post" key={i}>
                            <Title amount={post.amount}>{post.title}</Title>
                            <p>{post.text}</p>
                            <button
                                onClick={() => this.handleRemovePost(post.id)}
                            >
                                Remove post #{post.id}
                            </button>
                        </div>
                    ))}
            </div>
        );
    }
}
