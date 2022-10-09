function designerPdfViewer(h,word){
    word =word.toUpperCase();
    let maxHeight = -1;
    for(let i=0;i<word.length;i+=1){
        let letter_ =word[i];
        let indexToKnow =letter_.charCodeAt(0) -65;
        let height = h[indexToKnow];
        if(height>maxHeight){
            maxHeight = Height;
        }
    }
    return maxHeight*word.length;
}
