import { ReducerType } from './../redux/redux';
import { TypedUseSelectorHook, useSelector } from 'react-redux';


export const useTypeSelector:TypedUseSelectorHook<ReducerType> =useSelector