import { Component, createRef } from 'react';
import { Title } from './components/Title/Title';
import { LoginInput } from './components/LoginInput/LoginInput';
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
        login: '',
        showLogin: false
    };

    InputRef = createRef();

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

    handleFocusInput = () => {
        this.InputRef.current.focus();
    };
    handleToggleLogin = () => {
        console.log(this.InputRef.current.value);
        this.setState(prevState => ({
            login: this.InputRef.current.value,
            showLogin: !prevState.showLogin
        }));
    };

    render() {
        const { posts, showPosts, postsAmount, login, showLogin } = this.state;
        console.log('app');
        return (
            <div className="app">
                <div>
                    <button type="button" onClick={this.handleTogglePosts}>
                        {showPosts ? 'Hide posts' : 'Show posts'}
                    </button>
                    <button type="button" onClick={this.handleFocusInput}>
                        Focus input
                    </button>
                    <button type="button" onClick={this.handleToggleLogin}>
                        Show login
                    </button>
                </div>

                <div>
                    <span>Post Amount:</span> <span>{postsAmount}</span>
                </div>

                {showLogin && <h1>{login}</h1>}

                <LoginInput
                    // value={login}
                    // onChange={this.handleChangeInput}
                    ref={this.InputRef}
                />

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
