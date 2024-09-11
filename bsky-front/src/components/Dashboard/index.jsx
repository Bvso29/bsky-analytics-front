import { useEffect, useState } from 'react';
import axios from 'axios';
import { StyledCen002 } from "@/app/variaveis";
import { Aside } from "../Aside";
import CircularGraphic from "./CircularGraphic";
import { Interactions } from "./Interactions";
import { InteractionsGraphic } from "./InteractionsGraphic";
import { MostLikes } from "./MostLikes";
import { StyledContainer } from "./style";
import HeatMapGraphic from "./HeartMap";

export function Dashboard() {
    const [userData, setUserData] = useState(null);
    const [posts, setPosts] = useState([]);
    const [limit, setLimit] = useState(10); // Valor padrão para o limite

    useEffect(() => {
        const storedAuth = localStorage.getItem('auth');
        if (storedAuth) {
            const authData = JSON.parse(storedAuth);
            setUserData(authData);
        } else {
            console.error('No auth data found in localStorage');
        }
    }, []);

    useEffect(() => {
        const fetchPosts = async () => {
            if (userData) {
                try {
                    const response = await axios.get(`http://api.ojaum.live/feed?did=${userData.did}&limit=${limit}`, {
                        headers: {
                            'Content-Type': 'application/json',
                            'x-api-key': process.env.NEXT_PUBLIC_API_KEY // Acessa a variável de ambiente
                        }
                    });

                    console.log('API response for posts:', response); // Log da resposta completa da API
                    console.log('API response data for posts:', response.data); // Log dos dados da resposta

                    if (response.data && response.data.postsInfo) {
                        setPosts(response.data.postsInfo);
                    } else {
                        console.error('No posts data returned from API');
                    }
                } catch (error) {
                    console.error('Erro ao buscar posts:', error);
                }
            }
        };

        fetchPosts();
    }, [userData, limit]);

    if (!userData) {
        return <div>Loading...</div>;
    }

    // Função genérica para calcular a soma de uma propriedade
    const calculateTotal = (posts, property) => {
        return posts.reduce((sum, post) => sum + post[property], 0);
    };

    // Calcular as somas das propriedades
    const totalLikes = calculateTotal(posts, 'likeCount');
    const totalReplies = calculateTotal(posts, 'replyCount');
    const totalReposts = calculateTotal(posts, 'repostCount');
    const totalQuotes = calculateTotal(posts, 'quoteCount');

    return (
        <>
            <StyledContainer>
                <div className="Con_Men">
                    <Aside userData={userData} />
                </div>
                <main className="Con_Con">
                    <Interactions totalLikes={totalLikes} totalReplies={totalReplies} totalReposts={totalReposts} totalQuotes={totalQuotes}/> {/* Passar totalLikes como propriedade */}
                    <StyledCen002>
                        <div className="Con_Con_Gra">
                            <InteractionsGraphic />
                            <CircularGraphic />
                        </div>
                    </StyledCen002>
                    <MostLikes />
                    <HeatMapGraphic />
                    {/* FALTA COMPONENTIZAR POSTS */}
                    <h2>Posts</h2>
                    {posts.length > 0 ? (
                        posts.map((post, index) => (
                            <div key={index}>
                                <h3>{post.text}</h3>
                                <p>Likes: {post.likeCount}</p>
                                <p>Replies: {post.replyCount}</p>
                                <p>Reposts: {post.repostCount}</p>
                                <p>Quotes: {post.quoteCount}</p>
                                <img src={post.thumb} alt="Post thumbnail" />
                                <p>Indexed At: {new Date(post.indexedAt).toLocaleString()}</p>
                            </div>
                        ))
                    ) : (
                        <p>No posts available</p>
                    )}
                </main>
            </StyledContainer>
        </>
    );
}