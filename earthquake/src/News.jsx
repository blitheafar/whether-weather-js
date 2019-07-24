import React, {Component} from 'react';

class News extends Component {
    state = {
        stories: [],
        topStories: []
    }

    //组件第一次渲染后调用
    componentDidMount() {
        //使用ajax取得api数据
        // let xhr=new XMLHttpRequest();
        // let api='http://news-at.zhihu.com/api/4/news/latest';
        // xhr.open('get',api,true);
        // xhr.send(null);
        // xhr.onreadystatechange=()=>{
        //     if (xhr.readyState===4) {
        //         if (xhr.status===200) {
        //             console.log(xhr.responseText);
        //             let result=JSON.parse(xhr.responseText);
        //             this.setState({
        //                 stories: result.stories,
        //                 topStories: result.top_stories
        //             })
        //         }else{
        //             console.log('error');
        //         }
        //     }
        // }

        //fetch api数据
        fetch('http://news-at.zhihu.com/api/4/news/latest').then(function(response) {
            console.log(response);
            return response.json();
        }).then((myJson)=>{
            this.setState({stories: myJson.stories, topStories: myJson.top_stories})
        });
    }

    render() {
        const {stories, topStories} = this.state;
        // console.log(this.state);
        // console.log('test');
        return (<div className='latest-news'>
            <section className='part1'>
                <div className='title'>最热</div>
                <div className='container'>
                    {
                        topStories.map((item, i) => (<div className='item-box' key={i}>
                            <img src={item.image} alt=''/>
                            <div className="sub-title">{item.title}</div>
                        </div>))
                    }
                </div>
            </section>

            <section className="part2">
                <div className="title">热门</div>
                <div className="container">
                    {
                        stories.map((item, index) => (<div className="item-box" key={index}>
                            <img src={item.images[0]} alt=""/>
                            <div className="sub-title">{item.title}</div>
                        </div>))
                    }
                </div>
            </section>
        </div>)
    }
}

export default News;
