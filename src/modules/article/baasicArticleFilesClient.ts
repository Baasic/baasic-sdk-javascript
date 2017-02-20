/* globals module */ 
/**  
 * @module baasicArticleFilesClient  
 * @description Baasic Files Client provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Files Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services. 
*/

import { BaasicArticleFilesRouteDefinition } from '.';
import { IOptions, ModelMapper } from '..';

export class BaasicArticleFilesClient {

    public readonly streams: BaasicArticleFilesStreamsClient = new BaasicArticleFilesStreamsClient(this.modelMapper, this.baasicArticleFilesRouteDefinition);
    public readonly batch: BaasicArticleFilesBatchClient = new BaasicArticleFilesBatchClient(this.modelMapper, this.baasicArticleFilesRouteDefinition);

    constructor(
        private modelMapper: ModelMapper,
        private baasicArticleFilesRouteDefinition: BaasicArticleFilesRouteDefinition
    ) {}

    /**                  
     * Returns a promise that is resolved once the find action has been performed. Success response returns a list of file resources matching the given criteria.                  
     * @method                         
     * @example baasicArticleFilesClient.find({   
                    pageNumber : 1,   
                    pageSize : 10,   
                    orderBy : '<field>',   
                    orderDirection : '<asc|desc>',   
                    search : '<search-phrase>' 
                })
                .success(function (collection) {   
                    // perform success action here 
                })
                .error(function (response, status, headers, config) {   
                    // perform error handling here 
                });
     **/
    find(options: IOptions): Promise<any> {
        return this.baasicApiHttp.get(this.baasicArticleFilesRouteDefinition.find().expand(this.baasicApiService.findParams(options)));
    }

     /**                 
      * Returns a promise that is resolved once the get action has been performed. Success response returns requested file resource.                 
      * @method                        
      * @example baasicArticleFilesClient.get('<file-id>')
                    .success(function (data) {   
                        // perform success action here 
                    })
                    .error(function (response, status, headers, config) {   
                        // perform error handling here 
                    });                 
     **/ 
    get(id: string, options: IOptions): Promise<any> {
        return this.baasicApiHttp.get(this.baasicArticleFilesRouteDefinition.get().expand(this.baasicApiService.getParams(id, options)));
    }

    /**                  
     * Returns a promise that is resolved once the unlink action has been performed. This action will remove one or many file resources from the system if successfully completed. Specified file and all its accompanying derived resources will be removed from the system. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply baasicArticleFilesRouteService route template. Here is an example of how a route can be obtained from HAL enabled objects: 
     * ``` 
     * let params = modelMapper.removeParams(fileEntry); 
     * let uri = params['model'].links('unlink').href; 
     * ```                  
     * @method                         
     * @example // fileEntry is a file resource previously fetched using get action. The following action will remove the original file resource and all accompanying derived file resources.			 
                    baasicArticleFilesRouteDefinition.remove(fileEntry)
                        .success(function (data) {   
                            // perform success action here 
                        })
                        .error(function (response, status, headers, config) {   
                            // perform error handling here 
                        }); 				
     **/	
    unlink(data: any, options: IOptions): Promise<any> {
        if (!options){
            options = {};
        }
        let params = this.modelMapper.removeParams(data);
        let href = this.baasicArticleFilesRouteDefinition.unlink(params).expand(options);
        
        return this.baasicApiHttp.delete(href); 
    }

     /**                  
      * Returns a promise that is resolved once the update file action has been performed; this action will update a file resource if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicArticleFilesRouteService` route template. Here is an example of how a route can be obtained from HAL enabled objects: 
      ``` 
      let params = modelMapper.updateParams(fileEntry); 
      let uri = params['model'].links('put').href; 
      ```                  
      * @method                         
      * @example // fileEntry is a file resource previously fetched using get action. 
                    fileEntry.description = '<description>'; 
                    baasicArticleFilesClient.update(fileEntry)
                        .success(function (data) {   
                            // perform success action here 
                        })
                        .error(function (response, status, headers, config) {   
                            // perform error handling here 
                        }); 				
     **/		                			
    update(data: any): Promise<any> {
        let params = this.modelMapper.updateParams(data);
        return baasicApiHttp.put(this.baasicArticleFilesRouteDefinition.update(params), params[baasicConstants.modelPropertyName]);
    }

    /** 
     * Returns a promise that is resolved once the link action has been performed; this action links file resource from other modules into the Article Files module (For example: file resources from the Media Vault module can be linked directly into the Article Files module).                  
     * @method                         
     * @example baasicArticleFilesClient.link(fileObject).success(function (data) {   
                    // perform success action here 
                })
                .error(function (response, status, headers, config) {   
                    // perform error handling here 
                });                 
     **/ 	
    link(data: any): Promise<any> {
        return baasicApiHttp.post(this.baasicArticleFilesRouteDefinition.link().expand(), this.modelMapper.createParams(data)[this.baasicConstants.modelPropertyName]);
    }
}



class BaasicArticleFilesStreamsClient {
    
    constructor(
        private modelMapper: ModelMapper,
        private baasicArticleFilesRouteDefinition: BaasicArticleFilesRouteDefinition
    ) {}

    /**                     
     * Returns a promise that is resolved once the get action has been performed. Success response returns the file stream if successfully completed. If derived resource's format is passed, such as `width` and `height` for the image type of file resource, the operation will return a stream of the derived resource. Otherwise, stream of the original file resource will be retrieved.                     
     * @method streams.get                            
     * @example // Request the original file stream              
                    baasicArticleFilesClient.stream.get({id: '<file-id>'})
                        .success(function (data) {     
                            // perform success action here 
                        })
                        .error(function (response, status, headers, config) {     
                            // perform error handling here 
                        });

                // Request derived file stream                
                        baasicArticleFilesClient.stream.get({id: '<file-id>', width: <width>, height: <height>})
                            .success(function (data) {     
                                // perform success action here 
                            })
                            .error(function (response, status, headers, config) {    
                                 // perform error handling here 
                            });                     
     **/ 
    get(data: any): Promise<any> {
        if (!angular.isObject(data)) { 
            data = { 
                id: data 
            };
        }
        return this.baasicApiHttp.get(this.baasicArticleFilesRouteDefinition.streams.get().expand(data));   
    }

    /**                     
     * Returns a promise that is resolved once the get action has been performed. Success response returns the file stream as a blob. If derived resource's format is passed, such as `width` and `height` for the image type of file resource, the operation will return a blob of the derived file resource. Otherwise, blob of the original file resource will be retrieved. For more information on Blob objects please see [Blob Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Blob).                     
     * @method streams.getBlob                            
     * @example // Request the original blob                
                    baasicArticleFilesClient.stream.getBlob('<file-id>')
                        .success(function (data) {     
                            // perform success action here 
                        })
                        .error(function (response, status, headers, config) {     
                            // perform error handling here 
                        }); 
                        
                // Request derived blob                 
                        baasicArticleFilesClient.stream.getBlob({
                            id: '<file-id>', 
                            width: <width>, 
                            height: <height>
                        })
                        .success(function (data) {     
                            // perform success action here 
                        })
                        .error(function (response, status, headers, config) {     
                            // perform error handling here 
                        });                     
     **/  
    getBlob(data: any): Promise<any> {
        if (!angular.isObject(data)) { 
            data = { 
                id: data
            }; 
        }

        return this.baasicApiHttp({ 
            url:  this.baasicArticleFilesRouteDefinition.streams.get().expand(data),                             
            method: 'GET',                             
            responseType: 'blob'                                                    
        });     
    }

    /**                      
     * Returns a promise that is resolved once the update file stream action has been performed; this action will replace the existing stream with a new one. Alternatively, if a derived stream is being updated it will either create a new derived stream or replace the existing one. In order to update a derived stream, format needs to be passed (For example: `width` and `height` for the image type of file stream data type).                      
     * @method streams.update                      
     * @example // Update original file stream 
                    baasicArticleFilesClient.streams.update('<file-id>', <file-stream>)
                        .success(function (data) {   
                            // perform success action here 
                        })
                        .error(function (response, status, headers, config) {   
                            // perform error handling here 
                        }); 
                // Update derived file stream 
                    baasicArticleFilesClient.streams.update({id: '<file-id>', width: <width>, height: <height>}, <file-stream>)
                        .success(function (data) {   
                            // perform success action here 
                        })
                    .error(function (response, status, headers, config) {   
                        // perform error handling here 
                    });                     
     **/
    update(data: any, stream: any): Promise<any> {
        if (!angular.isObject(data)) { 
            data = { 
                id: data                              
            };
        }
        let formData = new FormData();
        formData.append('file', stream);

        return this.baasicApiHttp({ 
            transformRequest: angular.identity,
            url:  this.baasicArticleFilesRouteDefinition.streams.update().expand(data), 
            method: 'PUT',                             
            data: formData,                             
            headers: { 
                'Content-Type': undefined 
            }                         
        });                       
    }

     /**                      
      * Returns a promise that is resolved once the create file stream action has been performed; this action will upload the specified blob. For more information on Blob objects please see [Blob Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Blob).                      
      * @method streams.create                      
      * @example baasicArticleFilesClient.streams.create('<file-id>', <blob>)
                    .success(function (data) {  
                         // perform success action here 
                    })
                    .error(function (response, status, headers, config) {   
                        // perform error handling here 
                    });                     
     **/ 	                                         
    create(data: any , stream: any): Promise<any> {
         let formData = new FormData();                         
         formData.append('file', stream);

         return this.baasicApiHttp({ 
             transformRequest: angular.identity, 
             url:  this.baasicArticleFilesRouteDefinition.streams.create().expand(data),                             
             method: 'POST',                             
             data: formData,                             
             headers: { 
                 'Content-Type': undefined 
            }                         
        });                        
    }
}


class BaasicArticleFilesBatchClient {

    constructor(
        private modelMapper: ModelMapper,
        private baasicArticleFilesRouteDefinition: BaasicArticleFilesRouteDefinition
    ) {}

     /**                   
      * Returns a promise that is resolved once the unlink action has been performed. This action will remove file resources from the system if successfully completed. If derived resource's format is passed, such as `width` and `height` for the image type of file resource, the operation will remove just derived resource. Otherwise, specified file and all its accompanying derived resources will be removed from the system.                   
      * @method batch.unlink                         
      * @example // Remove original file resources                
                    baasicArticleFilesClient.batch.unlink([{ id: '<file-id>' }])
                        .success(function (data) {   
                            // perform success action here 
                        })
                        .error(function (response, status, headers, config) {   
                            // perform error handling here 
                        });		
                // Remove derived file resources  
                    baasicArticleFilesClient.batch.unlink([{ id: '<file-id>', fileFormat: { width: <width>, height: <height> } }])
                        .success(function (data) {   
                            // perform success action here 
                        })
                        .error(function (response, status, headers, config) {   
                            // perform error handling here 
                        });		                    
     **/
    unlink(data: any): Promise<any> {
        return this.baasicApiHttp({ 
            url: this.baasicArticleFilesRouteDefinition.batch.unlink().expand({}),                        
             method: 'DELETE',                         
             data: data                                               
        });
    }
 
    /**                   
     * Returns a promise that is resolved once the update action has been performed; this action updates specified file resources.                  
     * @method batch.update                         
     * @example baasicArticleFilesClient.batch.update(files)
                    .success(function (data) {   
                        // perform success action here 
                    }).error(function (response, status, headers, config) {   
                        // perform error handling here 
                    });                   
     **/ 				
    update(data: any): Promise<any> {
        return this.baasicApiHttp.put(this.baasicArticleFilesRouteDefinition.batch.update().expand(), this.modelMapper.updateParams(data)[this.baasicConstants.modelPropertyName]);
    }

    /**                   
     * Returns a promise that is resolved once the link action has been performed; this action links file resources from other modules into the Files module (For example: file resources from the Media Vault module can be linked directly into the Files module).                   
     * @method batch.link                         
     * @example baasicArticleFilesClient.batch.link(files)
                    .success(function (data) {   
                        // perform success action here 
                    })
                    .error(function (response, status, headers, config) {   
                        // perform error handling here 
                    });                   
     **/
    link(data: any): Promise<any> {
        return this.baasicApiHttp.post(this.baasicArticleFilesRouteDefinition.batch.link().expand(), this.modelMapper.createParams(data)[this.baasicConstants.modelPropertyName]);
    }
}


/**  
 * @overview  
 ***Notes:**  
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.  
 - All end-point objects are transformed by the associated route service. 
*/