import pandas as pd

with open('users_pivot.pkl', 'rb') as f:
    users_pivot = pd.compat.pickle_compat.load(f)

def find_similar_movies(movie_name, num_neighbors=10):
    movie_ratings = users_pivot[movie_name]
    similar_movies = users_pivot.corrwith(movie_ratings)
    similar_movies = similar_movies.sort_values(ascending=False)
    similar_movies = similar_movies.dropna()
    similar_movies = similar_movies.head(num_neighbors)
    return similar_movies.index.tolist()

def find_favorite_movies(user_id, num_movies=10):
    user_ratings = users_pivot.loc[user_id]
    favorite_movies = user_ratings.sort_values(ascending=False)
    favorite_movies = favorite_movies.head(num_movies)
    return favorite_movies.index.tolist()

def recommend(movie_name, num_recommendations=10):
    movie_ratings = users_pivot[movie_name]
    similar_movies = users_pivot.corrwith(movie_ratings)
    similar_movies = similar_movies.sort_values(ascending=False)
    similar_movies = similar_movies.dropna()
    similar_movies = similar_movies.head(num_recommendations)
    return similar_movies.index.tolist()