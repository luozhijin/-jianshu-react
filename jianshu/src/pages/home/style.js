import styled from 'styled-components';

export const HomeWrapper = styled.div`
	overflow: hidden;
	width: 960px;
	margin: 0 auto;
`;

export const HomeLeft = styled.div`
	float: left;
	margin-left: 15px;
	padding-top: 30px;
	width: 625px;
	.banner-img {
		width: 625px;
		height: 270px;
	}
`;

export const HomeRight = styled.div`
	width: 280px;
	float: right;
`;

export const TopicWrapper = styled.div`
	overflow: hidden;
	padding: 20px 0 10px 0;
	margin-left: -18px;
	border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
	float: left;
	height: 32px;
	line-height: 32px;
	margin-left: 18px;
	margin-bottom: 18px;
	padding-right: 10px ;
	background: #f7f7f7;
	font-size: 14px;
	color: #000;
	border: 1px solid #dcdcdc;
	border-radius: 4px;
	.topic-pic {
		display: block;
		float: left;
		width: 32px;
		height: 32px;
		margin-right: 10px;
	}
`;

export const ListItem = styled.div`
	overflow: hidden;
	padding: 20px 0;
	border-bottom: 1px solid #dcdcdc;
	.pic {
		display: block;
		width: 125px;
		height: 100px;
		float: right;
		border-radius: 10px;
	}
`;

export const ListInfo =	styled.div`
	width: 500px;
	float: left;
	.title {
		line-height: 27px;
		font-size: 18px;
		font-weight: bold;
		color: #333;
		cursor : pointer;
	}
	.desc {
		line-height: 24px;
		font-size: 13px;
		color: #999;
	}
`;

export const RecommendWrapper = styled.div`
	margin: 30px 0;
	width: 280px;

`;

export const RecommendItem = styled.div`
	width: 280px;
	height: 50px;
	margin-bottom : 5px;
	background: url(${(props) => props.imgUrl});
	/* //图片的显示方式 */
	background-size: contain;
	cursor : pointer;
`;
export const AppDowon = styled.div`
	cursor : pointer;
	margin-top : -20px;
    padding: 10px 22px;
	width: 83%;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    background-color: #fff;
	border: 1px solid #999;
	background-size: contain;
	div{
		display: inline-block;
		vertical-align : top;
		margin-right : 10px;	
	}
	.qrcode{
		width: 60px ;
		height: 60px;
		display : inline-block;
	}
	h3{
		margin-top: 14px;
		font-size: 15px;
    	color: #333;
	}
	p{
		margin-top: 4px;
		font-size: 13px;
		color: #999;
	}
`;
export const WriterWrapper = styled.div`
	margin-top : 15px;
	width : 278px;
	.top{
		width: 100%;
		height: 25px;
	};
	.left{
		float : left;
		font-size : 14px;
    	color: #969696;
	}
	.right {
		float : right
		font-size: 14px;
		color: #969696;
		cursor : pointer;
		.spin{
			display : inline-block;
			margin-right : 5px;
		}
	}
`;
export const WriterList = styled.div`
	height: 48px;
	width: 100%;
	margin-bottom : 10px;
	.portrait{
		width: 48px;
		height: 48px;
		border-radius : 50%;
		cursor :pointer;
	}
`
export const Detail = styled.div`
	width: 220px;
	position : relative;
	float : right;
	vertical-align : top ;
	h3{
		padding-top: 8px;
		font-size: 14px;
		display: block;
		cursor :pointer;
	}
	p{
		margin-top: 10px;
		font-size: 12px;
		color: #969696;
	}
	span{
		position:absolute;
		top : 0 ;
		right : 0;
		margin-top: 5px;
		padding: 0;
		font-size: 13px;
		color: #42c02e;
	}
`
export const LoadMore = styled.div`
	width: 100%;
	height: 40px;
	line-height: 40px;
	margin: 30px 0;
	background: #a5a5a5;
	text-align:center;
	border-radius: 10px;
	color: #fff;
	cursor: pointer;
`;

export const BackTop = styled.div`
	position: fixed;
	right: 60px;
	bottom: 70px;
	width: 55px;
	height: 55px;
	line-height: 55px;
	text-align: center;
	border: 1px solid #ccc;
	font-size: 40px;
	cursor : pointer;
`
