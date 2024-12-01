import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./app/Screen/LoginScreen";
import SignUp from "./app/Screen/SignUp";
import LocationScreen from "./app/Screen/LocationScreen";
import IfmScreen from "./app/Screen/IfmScreen";
import SignUpmodify from "./app/Screen/SignUpmodify";
import MyScreen from "./app/Screen/MyScreen";
import MyFoodScreen from "./app/Screen/MyFoodScreen";
import Post from "./app/Screen/Post";
import PostList from "./app/Screen/PostList";
import Page from './app/Screen/Page'; // Page 컴포넌트 추가
import RecipePost from "./app/Screen/RecipePost";
import MyRecipePost from "./app/Screen/MyRecipePost";
import MyRecipeList from "./app/Screen/MyReipeList";
import MyPostWrite from "./app/Screen/MyPostWrite";
import CmPostList from "./app/Screen/CmPostList";
import CmPostChat from "./app/Screen/CmPostChat";
import CmPost from "./app/Screen/CmPost";
import MyCmPost from "./app/Screen/MyCmPost";
import MyCmPostList from "./app/Screen/MyCmPostList";
import AddCmPost from "./app/Screen/AddCmPost";
import MyFoodWrite from "./app/Screen/MyFoodWrite";
import ModifyCmPost from "./app/Screen/ModifyCmPost";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Login Screen */}
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }} // 헤더 숨기기
          
        />

        {/* Sign Up Screen */}
        <Stack.Screen 
          name="SignUp" 
          component={SignUp} 
          options={{ headerShown: false }} // 헤더 숨기기
          
        />

        {/* Location Screen */}
        <Stack.Screen
          name="Location"
          component={LocationScreen} 
          options={{ headerShown: false }} // 헤더 숨기기
          
        />

        {/* Sign Up Screen */}
        <Stack.Screen 
          name="IfmScreen" 
          component={IfmScreen}  
          options={{ headerShown: false }} // 헤더 숨기기
          
        />
        {/* Sign Up Modify Screen */}
        <Stack.Screen 
          name="SignUpmodify" 
          component={SignUpmodify}  
          options={{ headerShown: false }} // 헤더 숨기기
          
        />
        {/* 내 게시판 Screen */}
        <Stack.Screen 
          name="MyScreen" 
          component={MyScreen}  
          options={{ headerShown: false }} // 헤더 숨기기
          
        />
        {/* 내 냉장고 Screen */}
        <Stack.Screen 
          name="MyFoodScreen" 
          component={MyFoodScreen}  
          options={{ headerShown: false }} // 헤더 숨기기
          
        />
        
        {/* 각 게시물 */}
        <Stack.Screen 
          name="Post" 
          component={Post}  
          options={{ headerShown: false }} // 헤더 숨기기
        />

        {/* 각 게시물 리스트 */}
        <Stack.Screen 
          name="PostList" 
          component={PostList}  
          options={{ headerShown: false }} // 헤더 숨기기
        />

        {/* 커뮤니티 */}
        <Stack.Screen
          name="Page"
          component={Page}
          options={{headerShown: false}}/>
        
        {/* 레시피 글작성 */}
        <Stack.Screen
          name="RecipePost"
          component={RecipePost}
          options={{headerShown: false}}/>
        
        {/* 내 레시피 */}
        <Stack.Screen
          name="MyRecipePost"
          component={MyRecipePost}
          options={{headerShown: false}}/>

        {/* 내 레시피 리스트 */}
        <Stack.Screen
          name="MyRecipeList"
          component={MyRecipeList}
          options={{headerShown: false}}/>

        {/* 내 식자재 추가 화면*/}
        <Stack.Screen
          name="MyPostWrite"
          component={MyPostWrite}
          options={{headerShown: false}}/>

        {/* 커뮤니티 게시물 리스트 */}
        <Stack.Screen
          name="CmPostList"
          component={CmPostList}
          options={{headerShown: false}}/>

        {/* 커뮤니티 게시물 리스트 */}
        <Stack.Screen
          name="CmPostChat"
          component={CmPostChat}
          options={{headerShown: false}}/>
          
        <Stack.Screen
          name="CmPost"
          component={CmPost}
          options={{headerShown: false}}/>
      
        {/* 커뮤니티 게시물 리스트 */}
        <Stack.Screen
          name="MyCmPost"
          component={MyCmPost}
          options={{headerShown: false}}/>
        
        <Stack.Screen
          name="MyFoodWrite"
          component={MyFoodWrite}
          options={{headerShown: false}}/>

        <Stack.Screen
          name="MyCmPostList"
          component={MyCmPostList}
          options={{headerShown: false}}/>

        <Stack.Screen
          name="AddCmPost"
          component={AddCmPost}
          options={{headerShown: false}}/>

                
        <Stack.Screen
          name="ModifyCmPost"
          component={ModifyCmPost}
          options={{headerShown: false}}/>
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}
