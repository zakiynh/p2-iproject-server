## Endpoints

List of Available Endpoints:

-   `POST /signin`
-   `POST /signup`
-   `GET /products`
-   `POST /products/add`
-   `GET /products/:id`
-   `PUT /products/:id`
-   `DELETE /products/:id`
-   `GET /category`

### POST /signup

#### Description

-   Signup

#### Response

_201 - OK_

-   **Body**

              ```json
              {
        "user": {
            "id": 7,
            "username": "jakiganteng",
            "email": "jakiganteng5@email.com",
            "password": "$2a$10$Q5iqeYyf3SM2tK8cGPwnweAMp3Dvg/pSFHGSGRozW24.w1N9AFXce",
            "createdAt": "2022-04-20T23:41:14.917Z",
            "updatedAt": "2022-04-20T23:41:14.918Z"
        },
        "message": "User Created"

    }

        ```

        _400 - Bad Request_

        ```

-   **Body**
    ```json
    {
        "statusCode": 400,
        "message": ["email must be unique"]
    }
    ```

### POST /signin

#### Description

-   signin

#### Response

_200 - OK_

-   **Body**

        ```json
        {
        "userData": {
            "id": 7,
            "username": "jakiganteng",
            "email": "jakiganteng5@email.com",
            "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiZW1haWwiOiJqYWtpZ2FudGVuZzVAZW1haWwuY29tIiwiaWF0IjoxNjUwNDk4MTgzfQ.H0jwV4CnyDRqLhhEVWhRfenvpYbL2elrupNVXc91Nk4"
        },
        "message": "Login Success"

    }

    ```

    ```

_401 - Unauthorized_

-   **Body**
    ```json
    {
        "statusCode": 401,
        "message": "Invalid email/password"
    }
    ```

_401 - Unauthorized_

-   **Body**
    ```json
    {
        "statusCode": 401,
        "message": "Invalid email/password"
    }
    ```

### GET /data/:id

#### Description

-   Get all the data/:id

#### Response

_200 - OK_

-   **Body**
    `json { "id": 1, "title": "Thread 1", "content": "Ini Thread 1", "imgUrl": "https://asset.kompas.com/crops/ehhP-pUUNXgvfSRoGnoPMPD8G2k=/0x340:900x940/750x500/data/photo/2021/01/05/5ff3e333b6fcc.jpg", "createdAt": "2022-04-19T20:43:15.295Z", "updatedAt": "2022-04-19T20:43:15.391Z", "comment": [ { "id": 2, "comment": "teses", "userId": 1, "threadId": 1, "createdAt": "2022-04-20T21:09:07.536Z", "updatedAt": "2022-04-20T21:09:07.611Z" }, { "id": 3, "comment": "adfasdf", "userId": 1, "threadId": 1, "createdAt": "2022-04-20T21:11:34.431Z", "updatedAt": "2022-04-20T21:11:34.432Z" }, { "id": 4, "comment": "testestes", "userId": 1, "threadId": 1, "createdAt": "2022-04-20T21:17:20.687Z", "updatedAt": "2022-04-20T21:17:20.688Z" }, { "id": 5, "comment": "asdadasds", "userId": 1, "threadId": 1, "createdAt": "2022-04-20T21:24:22.224Z", "updatedAt": "2022-04-20T21:24:22.224Z" }, { "id": 6, "comment": "asdadasds", "userId": 1, "threadId": 1, "createdAt": "2022-04-20T21:24:27.610Z", "updatedAt": "2022-04-20T21:24:27.610Z" }, { "id": 7, "comment": "qwerqwer", "userId": 1, "threadId": 1, "createdAt": "2022-04-20T21:26:41.569Z", "updatedAt": "2022-04-20T21:26:41.570Z" }, { "id": 8, "comment": "cdscasdc", "userId": 1, "threadId": 1, "createdAt": "2022-04-20T21:28:27.015Z", "updatedAt": "2022-04-20T21:28:27.015Z" }, { "id": 9, "comment": "hitttt", "userId": 1, "threadId": 1, "createdAt": "2022-04-20T21:31:33.392Z", "updatedAt": "2022-04-20T21:31:33.393Z" } ] } `

### GET /manga

#### Description

-   Get manga data

#### Request

-   **Headers**
    ```json
    {
        "Content-Type": "application/x-www-form-urlencoded"
    }
    ```
-   **Body**
    ```json
    {
        "id": "1",
        "type": "manga",
        "links": {
            "self": "https://kitsu.io/api/edge/manga/1"
        },
        "attributes": {
            "createdAt": "2013-12-18T13:48:24.164Z",
            "updatedAt": "2022-04-20T12:00:11.937Z",
            "slug": "guardian-dog",
            "synopsis": "Gengo Kurosaka leads a normal life until a run-away alien called \"Six-eyes\" decides to take refuge in his body. From then on, Gengo becomes Ishtar's target, a beautiful alien in charge of making sure the aliens don't turn planet Earth into hunting grounds. Gengo has now to learn to coexist with his parasite to stay alive...",
            "description": "Gengo Kurosaka leads a normal life until a run-away alien called \"Six-eyes\" decides to take refuge in his body. From then on, Gengo becomes Ishtar's target, a beautiful alien in charge of making sure the aliens don't turn planet Earth into hunting grounds. Gengo has now to learn to coexist with his parasite to stay alive...",
            "coverImageTopOffset": 0,
            "titles": {
                "en": null,
                "en_jp": "Guardian Dog",
                "en_us": "Guardian Dog"
            },
            "canonicalTitle": "Guardian Dog",
            "abbreviatedTitles": [
                "Guardian Dog"
            ],
            "averageRating": "71.41",
            "ratingFrequencies": {
                "2": "1",
                "3": "0",
                "4": "1",
                "5": "0",
                "6": "0",
                "7": "0",
                "8": "1",
                "9": "0",
                "10": "7",
                "11": "0",
                "12": "25",
                "13": "1",
                "14": "41",
                "15": "0",
                "16": "11",
                "17": "0",
                "18": "5",
                "19": "0",
                "20": "4"
            },
            "userCount": 129,
            "favoritesCount": 1,
            "startDate": "2005-01-01",
            "endDate": null,
            "nextRelease": null,
            "popularityRank": 7719,
            "ratingRank": 6234,
            "ageRating": null,
            "ageRatingGuide": null,
            "subtype": "manga",
            "status": "current",
            "tba": null,
            "posterImage": {
                "tiny": "https://media.kitsu.io/manga/1/poster_image/tiny-b4be97beecfca5ba4eb744291405db76.jpeg",
                "large": "https://media.kitsu.io/manga/1/poster_image/large-3210684af7bee6996926c63e5f16559e.jpeg",
                "small": "https://media.kitsu.io/manga/1/poster_image/small-8014f18506a324ddf8318c4a74bf4c12.jpeg",
                "medium": "https://media.kitsu.io/manga/1/poster_image/medium-5c1bd30a5d7538f9925796d3bbc013f4.jpeg",
                "original": "https://media.kitsu.io/manga/poster_images/1/original.jpg",
                "meta": {
                    "dimensions": {
                        "tiny": {
                            "width": 110,
                            "height": 156
                        },
                        "large": {
                            "width": 550,
                            "height": 780
                        },
                        "small": {
                            "width": 284,
                            "height": 402
                        },
                        "medium": {
                            "width": 390,
                            "height": 554
                        }
                    }
                }
            },
            "coverImage": null,
            "chapterCount": 22,
            "volumeCount": 4,
            "serialization": "Comic Rush",
            "mangaType": "manga"
        },
        "relationships": {
            "genres": {
                "links": {
                    "self": "https://kitsu.io/api/edge/manga/1/relationships/genres",
                    "related": "https://kitsu.io/api/edge/manga/1/genres"
                }
            },
            "categories": {
                "links": {
                    "self": "https://kitsu.io/api/edge/manga/1/relationships/categories",
                    "related": "https://kitsu.io/api/edge/manga/1/categories"
                }
            },
            "castings": {
                "links": {
                    "self": "https://kitsu.io/api/edge/manga/1/relationships/castings",
                    "related": "https://kitsu.io/api/edge/manga/1/castings"
                }
            },
            "installments": {
                "links": {
                    "self": "https://kitsu.io/api/edge/manga/1/relationships/installments",
                    "related": "https://kitsu.io/api/edge/manga/1/installments"
                }
            },
            "mappings": {
                "links": {
                    "self": "https://kitsu.io/api/edge/manga/1/relationships/mappings",
                    "related": "https://kitsu.io/api/edge/manga/1/mappings"
                }
            },
            "reviews": {
                "links": {
                    "self": "https://kitsu.io/api/edge/manga/1/relationships/reviews",
                    "related": "https://kitsu.io/api/edge/manga/1/reviews"
                }
            },
            "mediaRelationships": {
                "links": {
                    "self": "https://kitsu.io/api/edge/manga/1/relationships/media-relationships",
                    "related": "https://kitsu.io/api/edge/manga/1/media-relationships"
                }
            },
            "characters": {
                "links": {
                    "self": "https://kitsu.io/api/edge/manga/1/relationships/characters",
                    "related": "https://kitsu.io/api/edge/manga/1/characters"
                }
            },
            "staff": {
                "links": {
                    "self": "https://kitsu.io/api/edge/manga/1/relationships/staff",
                    "related": "https://kitsu.io/api/edge/manga/1/staff"
                }
            },
            "productions": {
                "links": {
                    "self": "https://kitsu.io/api/edge/manga/1/relationships/productions",
                    "related": "https://kitsu.io/api/edge/manga/1/productions"
                }
            },
            "quotes": {
                "links": {
                    "self": "https://kitsu.io/api/edge/manga/1/relationships/quotes",
                    "related": "https://kitsu.io/api/edge/manga/1/quotes"
                }
            },
            "chapters": {
                "links": {
                    "self": "https://kitsu.io/api/edge/manga/1/relationships/chapters",
                    "related": "https://kitsu.io/api/edge/manga/1/chapters"
                }
            },
            "mangaCharacters": {
                "links": {
                    "self": "https://kitsu.io/api/edge/manga/1/relationships/manga-characters",
                    "related": "https://kitsu.io/api/edge/manga/1/manga-characters"
                }
            },
            "mangaStaff": {
                "links": {
                    "self": "https://kitsu.io/api/edge/manga/1/relationships/manga-staff",
                    "related": "https://kitsu.io/api/edge/manga/1/manga-staff"
                }
            }
        }
    },
    ```

#### Response

_201 - Created_

-   **Body**
    ```json
    {
    "message": "Thread Created",
    "thread": {
        "id": 5,
        "title": "Thread 3",
        "content": "Ini Thread 3",
        "imgUrl": "https://asset.kompas.com/crops/ehhP-pUUNXgvfSRoGnoPMPD8G2k=/0x340:900x940/750x500/data/photo/2021/01/05/5ff3e333b6fcc.jpg",
        "createdAt": "2022-04-20T23:51:36.298Z",
        "updatedAt": "2022-04-20T23:51:36.298Z"
    }
}
    ```

_400 - Bad Request_

-   **Body**
    ```json
    {
        "statusCode": 400,
        "message": "Data must be complete"
    }
    ```

### CREATE /comments/:threadId

_201 - Created_

```json
{
    "message": "Comment Created",
    "commentData": {
        "id": 10,
        "comment": "ini comment ya",
        "userId": 1,
        "threadId": 1,
        "createdAt": "2022-04-20T23:53:26.023Z",
        "updatedAt": "2022-04-20T23:53:26.024Z"
    }
}
```

### DELETE /comments/:threadId/:commentId

#### Description

-   Remove a product data by id

#### Response

_200 - OK_

-   **Body**

    ```json
    {
    "message": "Comment Deleted",
    "data": {
        "id": 2,
        "comment": "teses",
        "userId": 1,
        "threadId": 1,
        "createdAt": "2022-04-20T21:09:07.536Z",
        "updatedAt": "2022-04-20T21:09:07.611Z"
    }
}
    ```

    _404 - Not Found_

-   **Body**
    ```json
    {
        "statusCode": 404,
        "message": "Error not Found"
    }
    ```

### ERROR Handler

### Response

_403 - Forbidden_

-   **Body**
    ```json
    {
        "statusCode": 403,
        "message": "You do not have access to delete or update this resource"
    }
    ```

_401 - Unauthorized_

-   **Body**
    ```json
    {
        "statusCode": 401,
        "message": "Invalid email/password"
    }
    ```

_401 - Invalid Token_

-   **Body**
    ```json
    {
        "statusCode": 401,
        "message": "Need to login first"
    }
    ```

### Global Error

#### Response

_500 - Internal Server Error_

-   **Body**
    ```json
    {
        "statusCode": 500,
        "message": "Internal Server Error"
    }
    ```
