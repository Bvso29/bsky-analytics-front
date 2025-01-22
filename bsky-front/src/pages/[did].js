import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import axios from "axios"
import Loading from "@/components/fragments/Loading"

const UserPage = () => {
    const router = useRouter()
    const { did } = router.query
    const [userData, setUserData] = useState(null)
    const [posts, setPosts] = useState([])
    const [limit, setLimit] = useState(10) // Valor padrão para o limite

    useEffect(() => {
        if (did) {
            const storedAuth = localStorage.getItem("auth")
            if (storedAuth) {
                const authData = JSON.parse(storedAuth)
                setUserData(authData)
            } else {
                console.error("No auth data found in localStorage")
            }
        }
    }, [did])

    useEffect(() => {
        const fetchPosts = async () => {
            if (userData) {
                try {
                    const response = await axios.get(
                        `https://api.ojaum.lat/feed?did=${userData.did}&limit=${limit}`,
                        {
                            headers: {
                                "Content-Type": "application/json",
                                "x-api-key": process.env.NEXT_PUBLIC_API_KEY, // Acessa a variável de ambiente
                            },
                        }
                    )

                    console.log("API response for posts:", response) // Log da resposta completa da API
                    console.log("API response data for posts:", response.data) // Log dos dados da resposta

                    if (response.data && response.data.postsInfo) {
                        setPosts(response.data.postsInfo)
                    } else {
                        console.error("No posts data returned from API")
                    }
                } catch (error) {
                    console.error("Erro ao buscar posts:", error)
                }
            }
        }

        fetchPosts()
    }, [userData, limit])

    if (!userData) {
        return <Loading></Loading> // Mostra o indicador de carregamento;
    }

    return (
        <div>
            <h1>Informações do Usuário</h1>
            <p>Nome: {userData.displayName}</p>
            <p>DID: {userData.did}</p>
            {/* Adicione mais informações conforme necessário */}

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
                        <p>
                            Indexed At:{" "}
                            {new Date(post.indexedAt).toLocaleString()}
                        </p>
                    </div>
                ))
            ) : (
                <p>No posts available</p>
            )}
        </div>
    )
}

export default UserPage
